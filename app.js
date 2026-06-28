// Resolve the "latest" build for the download buttons from a tiny committed
// catalog (web/latest.json), written by tools/publish_release.ps1 on each
// release. No GitHub API call -> no rate limit, and it degrades gracefully:
// if the catalog is missing, the static /releases/latest/download links in the
// HTML still work, the version/size just stay as em dashes.
(function () {
  // ── OS detection -> <html data-os> promotes the matching button. ──
  var ua = navigator.userAgent || '';
  var os = 'unknown';
  if (/Android/i.test(ua)) os = 'android';
  else if (/Windows/i.test(ua)) os = 'windows';
  document.documentElement.setAttribute('data-os', os);

  function mb(bytes) {
    if (!bytes || bytes <= 0) return '—';
    return (bytes / (1024 * 1024)).toFixed(0) + ' MB';
  }
  function fill(key, value) {
    var nodes = document.querySelectorAll('[data-fill="' + key + '"]');
    for (var i = 0; i < nodes.length; i++) nodes[i].textContent = value;
  }

  fetch('latest.json', { cache: 'no-cache' })
    .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
    .then(function (d) {
      if (d.version) {
        fill('version', d.version);
        var nav = document.getElementById('navVersion');
        if (nav) {
          nav.textContent = 'v' + d.version;
          if (d.tag) {
            nav.href = 'https://github.com/engineerlogger-spec/aerodoc-downloads/releases/tag/' + d.tag;
          }
        }
      }
      if (d.date) fill('date', d.date);
      if (d.windows) {
        fill('winSize', mb(d.windows.size));
      }
      if (d.android) {
        fill('apkSize', mb(d.android.size));
      }
    })
    .catch(function () { /* keep the static fallback links + em dashes */ });

  // ── Version history: every past version, downloadable on demand. ──
  function dl(url, label) {
    return url ? '<a class="vdl mono" href="' + url + '">' + label + '</a>' : '';
  }
  fetch('versions.json', { cache: 'no-cache' })
    .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
    .then(function (list) {
      var el = document.getElementById('versionList');
      if (!el || !list || !list.length) return;
      var html = '';
      for (var i = 0; i < list.length; i++) {
        var v = list[i];
        html += '<div class="vrow">'
          + '<span class="vver mono">' + (v.version || '?') + '</span>'
          + '<span class="vdate mono">' + (v.date || '') + '</span>'
          + '<span class="vlinks">'
          + dl(v.windows && v.windows.url, 'Windows ↓')
          + dl(v.android && v.android.url, 'Android ↓')
          + '</span></div>';
      }
      el.innerHTML = html;
    })
    .catch(function () {
      var el = document.getElementById('versionList');
      if (el) {
        el.innerHTML = '<p class="muted mono">'
          + '<a href="https://github.com/engineerlogger-spec/aerodoc-downloads/releases">'
          + 'All releases on GitHub →</a></p>';
      }
    });
})();
