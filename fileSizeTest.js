  const ufs = require('url-file-size')
  const rssItem = {
    title: "A Sample Title"
  }

  function assignEnclosureLength (image_size) {
    Object.assign(rssItem.enclosure, { 
        '@length': image_size,
    } )
  }
  async function getImageSize(imageURL) {
    let result = await ufs(imageURL).then((response) => {
      assignEnclosureLength(response);
    }).catch((error) => console.log(error));

    return result;
  }

  var image_url = "https://wieck-honda-production.s3.amazonaws.com/photos/ae0efd6ddebf2a80698633f7ae89cd885bb9ea76/thumbnail-364x204.jpg";
  Object.assign(rssItem, { 
      'enclosure': {
        '@url':image_url,
        '@type': 'image/jpeg',
      }
    } )
  image_size =  getImageSize(image_url);
