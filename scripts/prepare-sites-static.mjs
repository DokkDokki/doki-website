import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(projectRoot, "out");
const distDir = join(projectRoot, "dist");
const clientDir = join(distDir, "client");
const serverDir = join(distDir, "server");
const hostingDir = join(distDir, ".openai");

rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });
mkdirSync(clientDir, { recursive: true });
cpSync(outDir, clientDir, { recursive: true });
mkdirSync(serverDir, { recursive: true });
mkdirSync(hostingDir, { recursive: true });
cpSync(join(projectRoot, ".openai", "hosting.json"), join(hostingDir, "hosting.json"));

writeFileSync(
  join(serverDir, "index.js"),
  `const STATIC_EXTENSIONS = /\\.[a-z0-9]{2,8}$/i;
const SECURITY_HEADERS = {
  "Content-Security-Policy": "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://i.ytimg.com; font-src 'self' data:; connect-src 'self'; frame-src https://www.youtube-nocookie.com https://w.soundcloud.com; media-src 'self'; upgrade-insecure-requests",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), geolocation=(), microphone=(), payment=(), usb=()",
  "Strict-Transport-Security": "max-age=31536000",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
};

function secureResponse(response) {
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(name, value);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

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
      return secureResponse(direct);
    }

    const normalized = url.pathname.endsWith("/")
      ? url.pathname.slice(0, -1)
      : url.pathname;
    const htmlPath = normalized === "" ? "/index.html" : normalized + ".html";
    const page = await fetchAsset(env, request, htmlPath);

    if (page.status !== 404) {
      return secureResponse(page);
    }

    return secureResponse(await fetchAsset(env, request, "/404.html"));
  },
};
`
);
