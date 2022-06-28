# qabex/web-jsy/pwa-imm-dom

Template for [Progressive Web Application (PWA)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) with JSY and [js-imm-dom](https://github.com/shanewholloway/js-imm-dom) web development:

```bash
npm init from-gh qabex/web-jsy/pwa-imm-dom some-project
```

## Usage

```bash
./finish-init.sh
npm run build # or npm run watch
npm run serve
```

## Rollup Modification

**A note on `rollup.config.js`**: The actual service worker script is written to `/root` because its location determines its scope. In this location, it will have rights to the entire `/root` directory.

## Web Manifest File `app.webmanifest`

This file is required for the PWA to function. The following fields are required:
- `display` (although it technically defaults to `browser`)
- `icons` (technically required but the [specifics are little fuzzy](https://web.dev/installable-manifest/#recommendations))
- `name` and/or `short_name`
- `start_url`

## PWA Lifecycle Resources:

- [PWA feature support](https://jakearchibald.github.io/isserviceworkerready/)
- [Google's web.dev articles](https://web.dev/progressive-web-apps/)
- [MDN of course](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [MDN web manifest resource](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Another good comprehensive guide](https://felixgerschau.com/service-worker-lifecycle-update/)

## License

[![CC-BY 4.0][CCBYimg] CC-BY 4.0][CCBYlnk] or [CC0][CC0]

  [CCBYimg]: https://i.creativecommons.org/l/by/4.0/88x31.png
  [CCBYlnk]: http://creativecommons.org/licenses/by/4.0/
  [CC0]: https://creativecommons.org/share-your-work/public-domain/cc0/
