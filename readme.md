# Fans of LeFox

Due to unforeseen circumstances, we've been forced to change the site.

## Powered By

* [System: Hugo](https://gohugo.io)
* [Theme: Hinode](https://gethinode.com)
* [Mod: BS5 Lightbox](https://github.com/JorjaFox/mod-bs5-lightbox)

## Content

All content is located in the `/content/` folder and are separated into subdivisions as follows.

### `/assets/`

All javascript, css, and images. this includes 'gallery' images.

### `/data/`

Formatted data (like a database).

* `filmography.json` - acting, writing, self, etc.
* `/episodes/*` - All the episodes for the TV shows, with scores, excerpts, and production information.

### `/posts/`

All the `*.md` files of pure content.

* `/blog/` - blog posts
* `/faq/` - frequently asked questions, but also stored redirects like the gallery or wiki
* `/library/` - the library/wiki of all historical information
* `/tos/` - terms of use and privacy information

#### `/library/`

* `/actor/` - all acting roles
* `/advocacy/` - all advocacy work
* `/biographies/` - all bios from all sources (movies, TV, etc)
* `/news/` - news articles, separated by year
* `/producer/` - all work done as a producer
* `/recaps/` - TV episode recaps
* `/self/` - appearances in media as herself
* `/transcripts/` - interviews, online and off, sorted by year
* `/writer/` - work done as a writer


## Installation

* Checkout from Github
* Run `npm install`
* Run `npm run mod:update`

To build the site, run `npm run build`

To upgrade the backend site code, run `npm run upgrade`

## Development

When the `production` branch is updated, it will automatically push the code to the server.

1. Create a new branch to work on based on `production`.
2. Test locally: `npm run start`
3. Validate all MD files: `npm run lint`
4. Push branch to GitHub
5. Open a PR to `production`

A lead dev will review and merge.
