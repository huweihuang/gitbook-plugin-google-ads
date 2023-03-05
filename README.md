The Google Adsense plugin for Gitbook
==============

Config plugin in `book.json`.
```
{
  "plugins": ["google-adsense"]
}
```

Install via **npm**

npm link: https://www.npmjs.com/package/gitbook-plugin-google-ads

```
$ npm install gitbook-plugin-google-ads
```

### Usage

Need to config an array of ad's properties:

Add an array of `ads` with following properties:

* **client**(**require**): your Adsense Client ID.


For example,

```
{
    "plugins": ["google-adsense"],
    "pluginsConfig": {
        "google-adsense": {
            "ads": [
                {
                    "client": "ca-pub-xxxxx"
                }
            ]
        }
    }
}
```
