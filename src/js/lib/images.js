export default (function() {
  const source = (image) => {
    const imageSource = document.createElement('p');
    const imageAuthor = document.createElement('a');
    const imageSite = document.createElement('a');
    const imageTextOne = document.createTextNode('Photo by ');
    const imageTextTwo = document.createTextNode(' on ');

    imageAuthor.href = image.authorUrl;
    imageAuthor.innerText = image.author;
    imageSite.href = image.siteUrl;
    imageSite.innerText = image.site;
    imageSource.appendChild(imageTextOne);
    imageSource.appendChild(imageAuthor);
    imageSource.appendChild(imageTextTwo);
    imageSource.appendChild(imageSite);
    imageSource.classList.add('photo-source', 'text-center');

    return imageSource;
  }

  const detailedImage = (src, data) => {
    const [author, authorUrl, siteUrl] = data;
    const site = 'Unsplash';
    let image = new Image();

    image = Object.assign(image, { src, author, authorUrl, site, siteUrl });

    return image;
  }

  return { source, detailedImage };
})();
