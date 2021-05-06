import config from "../../../../config";

const targets: any = {
  es6: ".es6",
  es2015: ".es6",
  es2016: ".es6",
  es8: ".es8",
  es2017: ".es8",
  es2018: ".es8",
  es2019: ".es8",
  es2020: ".es8",
  esnext: ".es8",
};

export const name = "src/public/index.html";
export const file = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Application</title>
  </head>
  <body>
    <script src="lib/typescene${targets[config.target] || ""}.min.js"></script>
    <script src="app.bundle.js"></script>
  </body>
</html>
`;
