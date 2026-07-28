import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(projectRoot, "out");
const distDir = join(projectRoot, "dist");
const serverDir = join(distDir, "server");

rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });
cpSync(outDir, distDir, { recursive: true });
mkdirSync(serverDir, { recursive: true });

writeFileSync(
  join(serverDir, "index.js"),
  `const STATIC_EXTENSIONS = /\\\\.[a-z0-9]{2,8}$/i;

function assetRequest(request, pathname) {
  const url = new URL(request.url);
  url.pathname = pathname;
  return new Request(url, request);
}

async function fetchAsset(env, request, pathname) {
  if (!env.ASSETS) {
    return new Response("Static asset binding is unavailable.", { status: 500 });
  }
  return env.ASSETS.fetch(assetRequest(request, pathname));
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const direct = await fetchAsset(env, request, url.pathname);

    if (direct.status !== 404 || STATIC_EXTENSIONS.test(url.pathname)) {
      return direct;
    }

    const normalized = url.pathname.endsWith("/")
      ? url.pathname.slice(0, -1)
      : url.pathname;
    const htmlPath = normalized === "" ? "/index.html" : normalized + ".html";
    const page = await fetchAsset(env, request, htmlPath);

    if (page.status !== 404) {
      return page;
    }

    return fetchAsset(env, request, "/404.html");
  },
};
`
);
