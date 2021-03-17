const mongoose = require('mongoose')
const House = require('./../models/product.model')

const dbName = 'Frontend-FLAT101'
mongoose.connect(`mongodb://localhost/${dbName}`)

const houses = [
    {
        name: "Finca Las Magnolias",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque turpis leo, sagittis scelerisque lacus nec, euismod luctus neque. Nulla eu pretium turpis, quis bibendum augue. Aliquam eget mollis dolor. Quisque enim mauris, blandit a cursus et, consequat eu velit. Integer nec orci tristique, imperdiet diam at, porttitor neque. Nunc eget est enim. Nulla sed metus eu mauris suscipit consequat at ut tortor. Vivamus eu interdum augue. Morbi nisi est, porta non nulla id, ullamcorper dignissim ipsum. Nulla urna lorem, tristique non neque eu, fringilla iaculis neque. Nulla fermentum eros eget efficitur aliquam. In turpis augue, dignissim ut lectus et, gravida vehicula tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed magna augue, iaculis quis sollicitudin at, ullamcorper id lectus. In hac habitasse platea dictumst.",
        price: 190000,
        img: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2F0x0.jpg"
    },
    {
        name: "El Nogal",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque turpis leo, sagittis scelerisque lacus nec, euismod luctus neque. Nulla eu pretium turpis, quis bibendum augue. Aliquam eget mollis dolor. Quisque enim mauris, blandit a cursus et, consequat eu velit. Integer nec orci tristique, imperdiet diam at, porttitor neque. Nunc eget est enim. Nulla sed metus eu mauris suscipit consequat at ut tortor. Vivamus eu interdum augue. Morbi nisi est, porta non nulla id, ullamcorper dignissim ipsum. Nulla urna lorem, tristique non neque eu, fringilla iaculis neque. Nulla fermentum eros eget efficitur aliquam. In turpis augue, dignissim ut lectus et, gravida vehicula tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed magna augue, iaculis quis sollicitudin at, ullamcorper id lectus. In hac habitasse platea dictumst.",
        price: 1350000,
        img: "https://static.dezeen.com/uploads/2020/06/royal-william-kaven-portland-oregon_dezeen_hero.jpg"
    },
    {
        name: "Los Arenales",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque turpis leo, sagittis scelerisque lacus nec, euismod luctus neque. Nulla eu pretium turpis, quis bibendum augue. Aliquam eget mollis dolor. Quisque enim mauris, blandit a cursus et, consequat eu velit. Integer nec orci tristique, imperdiet diam at, porttitor neque. Nunc eget est enim. Nulla sed metus eu mauris suscipit consequat at ut tortor. Vivamus eu interdum augue. Morbi nisi est, porta non nulla id, ullamcorper dignissim ipsum. Nulla urna lorem, tristique non neque eu, fringilla iaculis neque. Nulla fermentum eros eget efficitur aliquam. In turpis augue, dignissim ut lectus et, gravida vehicula tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed magna augue, iaculis quis sollicitudin at, ullamcorper id lectus. In hac habitasse platea dictumst.",
        price: 560000,
        img: "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/hogartotal/C/Cuidados-para-una-casa-de-playa-2.jpg"
    },
    {
        name: "Finca Los Naranjos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque turpis leo, sagittis scelerisque lacus nec, euismod luctus neque. Nulla eu pretium turpis, quis bibendum augue. Aliquam eget mollis dolor. Quisque enim mauris, blandit a cursus et, consequat eu velit. Integer nec orci tristique, imperdiet diam at, porttitor neque. Nunc eget est enim. Nulla sed metus eu mauris suscipit consequat at ut tortor. Vivamus eu interdum augue. Morbi nisi est, porta non nulla id, ullamcorper dignissim ipsum. Nulla urna lorem, tristique non neque eu, fringilla iaculis neque. Nulla fermentum eros eget efficitur aliquam. In turpis augue, dignissim ut lectus et, gravida vehicula tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed magna augue, iaculis quis sollicitudin at, ullamcorper id lectus. In hac habitasse platea dictumst.",
        price: 750000,
        img: "https://firmax.es/wp-content/uploads/2019/09/finca-rustica-1.jpg"
    },
    {
        name: "Vista Verde",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque turpis leo, sagittis scelerisque lacus nec, euismod luctus neque. Nulla eu pretium turpis, quis bibendum augue. Aliquam eget mollis dolor. Quisque enim mauris, blandit a cursus et, consequat eu velit. Integer nec orci tristique, imperdiet diam at, porttitor neque. Nunc eget est enim. Nulla sed metus eu mauris suscipit consequat at ut tortor. Vivamus eu interdum augue. Morbi nisi est, porta non nulla id, ullamcorper dignissim ipsum. Nulla urna lorem, tristique non neque eu, fringilla iaculis neque. Nulla fermentum eros eget efficitur aliquam. In turpis augue, dignissim ut lectus et, gravida vehicula tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed magna augue, iaculis quis sollicitudin at, ullamcorper id lectus. In hac habitasse platea dictumst.",
        price: 298000,
        img: "https://media-cdn.tripadvisor.com/media/photo-s/0e/ad/87/da/jungle-house.jpg"
    },
]

House
    .create(houses)
    .then(allHouses => console.log(`You have created ${allHouses.length} houses`))
    .catch(err => console.log(err))