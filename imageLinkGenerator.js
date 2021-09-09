const fs = require("fs");
const defaultUrl = `${__dirname}/public/assets/photos/`;
const folders = [
  `About`,
  `Art Photography`,
  `EXTRA-CURRICULAR ACTIVITIES`,
  `Gallary`,
  `Project Work Photographs`,
];

const static = "assets/photos/";

const getFiles = (dir) => fs.readdirSync(dir);

const getFolders = async () => {
  var data = [];
  let subSubFoldersDemo = [];
  let subFoldersDemo = [];

  for (let countFolders = 0; countFolders < folders.length; countFolders++) {
    const subFolders = await fs.readdirSync(defaultUrl + folders[countFolders]);

    for (
      let countSubFolders = 0;
      countSubFolders < subFolders.length;
      countSubFolders++
    ) {
      const subSubFolders = await fs.readdirSync(
        defaultUrl + folders[countFolders] + "/" + subFolders[countSubFolders]
      );

      for (
        let countSubSubFolders = 0;
        countSubSubFolders < subSubFolders.length;
        countSubSubFolders++
      ) {
        var isDir = await fs
          .lstatSync(
            defaultUrl +
              folders[countFolders] +
              "/" +
              subFolders[countSubFolders] +
              "/" +
              subSubFolders[countSubSubFolders]
          )
          .isDirectory();

        if (isDir) {
          const files = await fs.readdirSync(
            defaultUrl +
              folders[countFolders] +
              "/" +
              subFolders[countSubFolders] +
              "/" +
              subSubFolders[countSubSubFolders]
          );

          for (let i = 0; i < files.length; i++)
            files[i] =
              static +
              folders[countFolders] +
              "/" +
              subFolders[countSubFolders] +
              "/" +
              subSubFolders[countSubSubFolders] +
              "/" +
              files[i];
          subSubFoldersDemo.push({
            subSubFolder: subSubFolders[countSubSubFolders],
            files: files,
          });
        } else {
          if (countSubSubFolders == subSubFolders.length - 1) {
            const files = [];

            for (let i = 0; i < subSubFolders.length; i++) {
              files.push(
                static +
                  folders[countFolders] +
                  "/" +
                  subFolders[countSubFolders] +
                  "/" +
                  subSubFolders[i]
              );
            }

            subSubFoldersDemo.push({
              subSubFolder: subFolders[countSubFolders],
              files: files,
            });
          }
        }
      }

      subFoldersDemo.push({
        subFolder: subFolders[countSubFolders],
        subSubFolders: subSubFoldersDemo,
      });
      subSubFoldersDemo = [];
    }

    data.push({
      mainFolder: folders[countFolders],
      subFolders: subFoldersDemo,
    });
    subFoldersDemo = [];
    subSubFoldersDemo = [];
    console.log(data);
  }

  fs.writeFile("imageLinks.js", JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log("File is created successfully.");
  });
};

getFolders();
