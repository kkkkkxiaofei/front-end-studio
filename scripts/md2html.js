console.log('Converting Start ...');
(function() {

    var showdown  = require('showdown'),
        fs = require('fs'),
        shell = require('shelljs'),
        converter = new showdown.Converter({tables: true}),
        mdDir = 'mds',
        viewDir = 'views',
        mdStructure = {};
    function md2Html(dir) {
        var files = fs.readdirSync(dir);
        for(var i in files) {
            var fileName = files[i];
            var path = dir + '/' + fileName;
            var stat = fs.statSync(path);
            if(stat.isFile()) {
                var type = dir.split('/').pop();
                var mdContent = fs.readFileSync(path).toString();
                var html = converter.makeHtml(mdContent);
                var newFileName = fileName.replace('.md', '');
                shell.mkdir('-p', viewDir + '/' + type);
                var viewPath = 'dist' + '/' + viewDir + '/' + type + '/' + newFileName + '.html';
                console.log(viewPath);
                fs.writeFile(viewPath, html, function(err) {
                    if(err) return console.log(err)
                });
                mdStructure[type] = mdStructure[type] || [];
                mdStructure[type].push({
                    title: fileName,
                    url: viewDir + '/' + type + '/' + newFileName + '.html'//dist is the static directory
                });
            } else {
                md2Html(path);
            }
        }
    }

    function toJson(mdStructure) {
        var json = JSON.stringify(mdStructure);
        fs.writeFile('dist/md.json', json, function(err) {
            if(err) return console.log(err)
        });
    }

    md2Html(mdDir);

    toJson(mdStructure);

})();
console.log('Converting Done ...');