import Mock from "mockjs";

Mock.mock(/^\/api\.php\/cms\/site(\/name\/.+)?$/, "get", (options) => {
  const data = {
    id: "1",
    acode: "cn",
    title: "@ctitle(3,8)",
    subtitle: "@ctitle(8,12)",
    domain: "",
    logo: "@image('200x68', '#fff', '#000', 'logo')",
    keywords: "@cparagraph(1,5)",
    description: "@cparagraph(3,7)",
    icp: "",
    theme: "default",
    statistical: "",
    copyright: "Copyright © 2018-2020 All Rights Reserved.",
  };
  const params = options.url.replace("/api.php/cms/site", "");
  if (params) {
    const param = params.replace("/name/", "");
    return Mock.mock({
      code: 1,
      rowtotal: 1,
      data: data[param],
    });
  } else {
    return Mock.mock({
      code: 1,
      rowtotal: 1,
      data,
    });
  }
});
