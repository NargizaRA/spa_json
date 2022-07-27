const books = {
    classics: [{
        type: "classics",
        author: "Paulo Coelho",
        title: "The Alchemist",
        categories: ["quest", "adventure", "fantasy"],
        image: "data:image/jpeg;base64,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"
    },
    {
        type: "classics",
        author: "Leo Tolstoy",
        title: "Anna Karenina",
        categories: ["romantic", "drama", "tragedy"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTRJL1KAEoI2Qoilt3Md9EY4h7uV8OH1fuAQ&usqp=CAU"
    },
    {
        type: "classics",
        author: "F. Scott Fitzgerald",
        title: "The Great Gatsby",
        categories: ["tragedy", "realism", "modernism", "social satire"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj6QJ7TuYCGC4jeAMpsUjgxEvvmNWj7TL4LpGgqZm1lotRML7x1lxvNAJaMzrtI83KycA&usqp=CAU"
    }
    ],
    
    detectives: [{
        type: "detectives",
        author: "Christie Agatha",
        title: "Murder on the Orient Express",
        categories: ["mystery", "classics", "crime"],
        image: "https://m.media-amazon.com/images/I/51d7Aqr958L._SL500_.jpg"
    },
    {
        type: "detectives",
        author: "Edgar Allan Poe",
        title: "The Murders in the Rue Morgue",
        categories: ["horror", "short stories", "mystery"],
        image: "https://m.media-amazon.com/images/I/512GNC2e7UL._SL500_.jpg"
    },
    {
        type: "detectives",
        author: "Maria Mifsud",
        title: "The best thing since sliced bread",
        categories: ["thriller", "crime", "mystery"],
        image: "https://m.media-amazon.com/images/I/411Or6Yk6cL._SL500_.jpg"
    }
    ],
    fantasy: [{
        type: "fantasy",
        author: "George R. R. Martin",
        title: "A Game of Thrones",
        categories: ["fantasy romance", "epic fantasy", "speculative"],
        image: "https://marketing.prowritingaid.com/GameOfThronesBookCover.jpg"
    },
    {
        type: "fantasy",
        author: "J. R. R. Tolkien",
        title: "The Fellowship of the Ring",
        categories: ["fairytale", "magic", "portal"],
        image: "https://marketing.prowritingaid.com/Fellowshipoftheringcover.jpg"
    },
    {
        type: "fantasy",
        author: "C. S. Lewis",
        title: "The Lion, the Witch and the Wardrobe",
        categories: ["fantasy romance", "speculative", "low fantasy"],
        image: "https://marketing.prowritingaid.com/LionWitchWardrobeCover.jpg"
    }
    ],
    
    romance: [{
        type: "romance",
        author: "Tessa Bailey",
        title: "My Killer Vacation",
        categories: ["romantic suspense", "comic", "inspirational"],
        image: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781087928531_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
    },
    {
        type: "romance",
        author: "Debbie Macomber",
        title: "The Best Is Yet to Come",
        categories: ["drama", "inspirational", "romantic suspense"],
        image: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781984818843_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
    },
    {
        type: "romance",
        author: "Ali Hazelwood",
        title: "The Love Hypothesis",
        categories: ["detective", "young adult", "comic"],
        image: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780593336823_p0_v6%5D&call=url%5Bfile:common/decodeProduct.chain%5D"
    }
    ],
};



let booksData = JSON.stringify(books)
export { booksData };

