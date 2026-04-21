import { writable } from 'svelte/store';

export const release = writable(null);

export async function fetchRelease() {
  try {
    const res = await fetch(
      'https://api.github.com/repos/ChernegaSergiy/minute-of-silence/releases/latest'
    );
    const data = await res.json();

    const findAsset = (ext) =>
      data.assets?.find(a => a.name.endsWith(ext));

    const windowsAsset = findAsset('.exe');
    const linuxAsset = findAsset('.deb');

    release.set({
      version: data.name?.replace(/^v/, '') ?? '—',
      htmlUrl: data.html_url,
      windows: {
        size: windowsAsset ? `~${Math.round(windowsAsset.size / 1024 / 1024)} MB` : '—',
        url: windowsAsset?.browser_download_url ?? data.html_url,
      },
      linux: {
        size: linuxAsset ? `~${Math.round(linuxAsset.size / 1024 / 1024)} MB` : '—',
        url: linuxAsset?.browser_download_url ?? data.html_url,
      },
    });
  } catch {
    release.set(null);
  }
}
