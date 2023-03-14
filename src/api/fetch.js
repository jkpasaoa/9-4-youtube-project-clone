const KEY = process.env.REACT_APP_API_KEY


export function getAllVideos(searchTerm) {
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=5&key=${KEY}`)
    .then((response) => response.json())
}

// EXAMPLE OF RESPONSE DATA
/**
 * {
  "kind": "youtube#searchListResponse",
  "etag": "fkaHqEV1t9BDmye1LnBXWrw7Egw",
  "nextPageToken": "CAIQAA",
  "regionCode": "US",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 2
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "emZcBXdu7JxnjjKIZLqJkKPk2RU",
      "id": {
        "kind": "youtube#video",
        "videoId": "RiV6voYxldQ"
      },
      "snippet": {
        "publishedAt": "2021-06-14T23:02:21Z",
        "channelId": "UCaCi6y7plHqhCUfnKsP7LrQ",
        "title": "Godzilla vs. Kong - Kong &amp; Godzilla vs. MechaGodzilla Fight Scene",
        "description": "Welcome to a new video from the Monsterverse! If you enjoyed this scene, leave a like and subscribe! Watch part one here ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/RiV6voYxldQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/RiV6voYxldQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/RiV6voYxldQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "MONSTERVERSE - Greatest Scenes",
        "liveBroadcastContent": "none",
        "publishTime": "2021-06-14T23:02:21Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "X9nqKtPy07rvcjOk06c-1HBtzaw",
      "id": {
        "kind": "youtube#video",
        "videoId": "IHBwaL_cF60"
      },
      "snippet": {
        "publishedAt": "2021-06-15T16:00:52Z",
        "channelId": "UCaCi6y7plHqhCUfnKsP7LrQ",
        "title": "Godzilla vs. Kong - Tasman Sea Fight Scene (First Fight Scene)",
        "description": "Welcome to a new video from the Monsterverse! If you enjoyed this scene, leave a like and subscribe! » Godzilla vs. Kong Playlist ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/IHBwaL_cF60/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/IHBwaL_cF60/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/IHBwaL_cF60/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "MONSTERVERSE - Greatest Scenes",
        "liveBroadcastContent": "none",
        "publishTime": "2021-06-15T16:00:52Z"
      }
    }
  ]
}
 */