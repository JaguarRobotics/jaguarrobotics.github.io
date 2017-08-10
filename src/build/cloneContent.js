#!/usr/bin/env node
var Git = require("nodegit");
var fs = require("fs");

fs.stat("src/content", function(err, stats) {
    if (err) {
        if (err.code == "ENOENT") {
            var repo;
            Git.Clone("https://github.com/JaguarRobotics/jaguarrobotics.github.io", "./src/content").then(function(_repo) {
                repo = _repo;
                return repo.getBranch("refs/remotes/origin/content")
            }).then(function(ref) {
                return repo.checkoutRef(ref);
            });
        } else {
            console.error("Error while stating directory");
            process.exit(err.errno);
        }
    } else {
        var repo;
        Git.Repository.open("./src/content/.git").then(function(_repo) {
            repo = _repo;
            return repo.fetchAll();
        }).then(function() {
            return repo.mergeBranches("content", "origin/content");
        });
    }
});
