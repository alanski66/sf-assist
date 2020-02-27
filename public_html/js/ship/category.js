function initialise(){

    if(locale){
        var lang = "?lang=" + locale;
    }
    if(locale == 'ar'){
        lastSegment == firstSegment;
    }
    console.log ("lastSeg" + lastSegment);
    // var url = domain + '/api/v1/ship/structure/category/'+ lastSegment+'.json' + lang;
    var lurl = 'https://www.seafarerswelfare.org/api/v1/ship/structure/category/good-mental-health.json?lang=en'
    $.getJSON( lurl, function( data ) {
        console.log(data);


        var templateCatHeading = '{{#shipStructureAsCategory}}{{category}}{{/shipStructureAsCategory}}';
        var catheading = Handlebars.compile(templateCatHeading)(data);
        $('.sub-heading').html(catheading);

        var templateCard =
            '{{#shipStructureAsCategory}}' +
            '{{#entries}}' +
            '<div class="col-xs-12 col-sm-6 col-md-6 '+lastSegment+'">' +
                '<a class="ship-card " href="' + lastSegment + '/{{slug}}">' +
                    '<div class=" thumbnail" >' +
                        '<div class="card-icon  ">' +
                            '{{#if mediaImage.length}}' +
                                '<img class="img-responsive " src="{{mediaImage}}" alt="Icon {{title}} ">' +
                            '{{/if}}' +
                            '{{#if image.length}}' +
                                '<img class="img-responsive " src="{{image}}" alt="Icon {{title}} ">' +
                            '{{/if}}' +

                        //'<img class="card-img-top roll pt-5 pb-0" src="https://iswancraft3.test/assets/images/icons/icon-mental-white.svg" alt="Icon Mental "></div>' +
                            '<div class="card-body mb-5 ">' +
                            '<h3 class="card-title">{{title}}</h3>' +

                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</a>' +
            '</div>' +
            '{{/entries}}' +
            '{{/shipStructureAsCategory}}';


        var result = Handlebars.compile(templateCard)(data);


       // var html = Handlebars.to_html(templateCard, data);
        $('.mustache-category').html(result);

       // doSponsorship(data);

    });

}

function doSponsorship(data){

    //
    // var sponsorship =
    //     '{{#each shipStructureAsCategory}}' +
    //             '{{#if categorySponsors.length}}' +
    //                 '<div class="sponsored col-xs-12 ">'+
    //                 '<h4>Sponsored by</h4>' +
    //                 '<ul class="list-unstyled list-inline">' +
    //             '{{/if}}' +
    //
    //                 '{{#categorySponsors}}' +
    //                     '<li>' +
    //                     '<a href="{{url}}">' +
    //                     '<img style="max-width:150px;height:auto" src ="{{image}}">' +
    //                     '</a>' +
    //                     '</li>' +
    //                 '{{/categorySponsors}}' +
    //
    //     '{{#if categorySponsors.length}}</ul>{{/if}}' +
    //     '{{/each}}';
    //     //'{{#if shipStructureAsCategory}}</div>{{/if}}' ;
    //
    // var result = Handlebars.compile(sponsorship)(data);
    // $('.handles').html(result);

}

function doMenu(){
    // var current  = window.location.pathname.split("/").pop();
    //
    // Handlebars.registerHelper("ifvalue", function(conditional, options) {
    //     if (conditional == options.hash.equals) {
    //         return options.fn(this);
    //     } else {
    //         return options.inverse(this);
    //     }
    // });
    //
    // if(locale){
    //     var lang = "?lang=" + locale;
    // }
    // var url = domain + '/api/v1/ship/structure/categories.json' + lang;
    // $.getJSON( url, function( data ) {
    //     console.log(data);
    //     var sideMenu =
    //         '<ul class="apiside">' +
    //         '{{#shipStructureLevelOne}}' +
    //         '{{#ifvalue sendtoseafarerhelp equals=true}}' +
    //         '<li><a {{#ifvalue slug equals="'+current+'"}}class="active"{{/ifvalue}} href="' + catUrl + '{{slug}}">{{title}}</a></li>'+
    //         '{{/ifvalue}}'+
    //         '{{/shipStructureLevelOne}}' +
    //         '</ul>';
    //     var sidehtml = Handlebars.compile(sideMenu)(data);
    //     $('.mustache-catnav').html(sidehtml);
    // });
}


$( document ).ready(function() {
    console.log( "ready!" );
    initialise();
    // doMenu();

       //matchehight $('.ship-card').matchHeight(options);

});
