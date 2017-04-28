module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    distdir: './dist',
    clean: ['<%= distdir %>/*'],
    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: "./public",
            src: ["**"],
            dest: "<%= distdir %>/public"
          }
          // {
          //   expand: true,
          //   cwd: "./views",
          //   src: ["**"],
          //   dest: "./dist/views"
          // }
        ]
      }
    },
    ts: {
      app: {
        files: [{
          src: ["src/\*\*/\*.ts", "!src/.baseDir.ts"],
          dest: "<%= distdir %>"
        }],
        options: {
          module: "commonjs",
          target: "es6",
          experimentalDecorators: true,
          emitDecoratorMetadata: true,
          sourceMap: false
        }
      }
    },
    tslint: {
      options: {
        configuration: "tslint.json"
      },
      files: {
        src: ["src/\*\*/\*.ts"]
      }
    },
    watch: {
      ts: {
        files: ["src/\*\*/\*.ts"],
        tasks: ["ts", "tslint"]
      }
      // views: {
      //   files: ["views/**/*.pug"],
      //   tasks: ["copy"]
      // }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-tslint");

  grunt.registerTask("default", [
    "clean",
    "copy",
    "ts",
    "tslint"
  ]);

};