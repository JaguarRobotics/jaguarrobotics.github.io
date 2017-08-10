import "jquery";

export class GitTreeEntry {
    constructor(res) {
        this.name = res.path;
        this.hash = res.sha;
    }
}

export class GitTree {
    constructor(res) {
        this.folders = [];
        this.files = [];
        for (var i = 0; i < res.tree.length; ++i) {
            switch (res.tree[i].type) {
                case "blob":
                    this.files.push(new GitTreeEntry(res.tree[i]));
                    break;
                case "tree":
                    this.folders.push(new GitTreeEntry(res.tree[i]));
                    break;
            }
        }
    }
}

export default class GitData {
    constructor(org, repo) {
        this.org = org;
        this.repo = repo;
        this.url = "https://api.github.com/repos/" + org + "/" + repo + "/git";
    }

    getBlob(hash, callback) {
        $.get({
            "accepts": {
                "text": "application/vnd.github.v3+json"
            },
            "url": this.url + "/blobs/" + hash
        }).done(data => callback(data.content)).fail(() => callback(null));
    }

    saveBlob(data, callback) {
        $.post({
            "accepts": {
                "json": "application/vnd.github.v3+json"
            },
            "data": JSON.stringify({
                "content": data,
                "encoding": "base64"
            }),
            "url": this.url + "/blobs"
        }).done(data => callback(data.sha)).fail(() => callback(null));
    }

    getCommit(hash, callback) {
        $.get({
            "accepts": {
                "json": "application/vnd.github.v3+json"
            },
            "url": this.url + "/commits/" + hash
        }).done(data => callback(data.tree.sha)).fail(() => callback(null));
    }

    getRef(name, callback) {
        $.get({
            "accepts": {
                "json": "application/vnd.github.v3+json"
            },
            "url": this.url + "/refs/" + name
        }).done(data => callback(data.object.sha)).fail(() => callback(null));
    }

    setRef(name, hash, callback) {
        getRef(name, exists => {
            if (exists) {
                $.ajax({
                    "accepts": {
                        "json": "application/vnd.github.v3+json"
                    },
                    "data": JSON.stringify({
                        "sha": hash,
                        "force": true
                    }),
                    "method": "PATCH",
                    "url": this.url + "/refs/" + name
                }).done(() => callback(true)).fail(() => callback(false))
            } else {
                $.post({
                    "accepts": {
                        "json": "application/vnd.github.v3+json"
                    },
                    "data": JSON.stringify({
                        "ref": "refs/" + name,
                        "sha": hash
                    }),
                    "url": this.url + "/refs"
                }).done(() => callback(true)).fail(() => callback(false));
            }
        });
    }

    getTree(hash, callback) {
        $.get({
            "accepts": {
                "json": "application/vnd.github.v3+json"
            },
            "url": this.url + "/trees/" + hash
        }).done(data => callback(new GitTree(data))).fail(() => callback(null));
    }
}
