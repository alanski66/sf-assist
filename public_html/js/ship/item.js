function initialise(){

    if(locale){
        var lang = "?lang=" + locale;
    }
    if(locale == 'ar'){
        lastSegment == firstSegment;
    }
    var url = domain + '/api/v1/ship/category/item/'+ lastSegment+'.json'+ lang;


    console.log("item" + lastSegment);
    $.getJSON( url, function( data ) {
        console.log(data);
        doSubHeading(data);

        var templateCard =
            '{{#shipItems}}' +
            '<div class="col-xs-12 col-">' +
            '<div class="item-body  ">' +
            '<div class="thumbnail card pull-right" >' +
                '<input type="hidden" class="catSlug" value="{{categorySlug}}">' +
            '<a class="ship-card" '+
            'onclick="ga(\'send\', \'event\', \'PDF\', \'Download\', \'{{title}}\');"' +
            'href="{{download}}">' +
            '<img class="img-responsve item-image" src="{{image}}" alt="Icon {{title}} ">' +
            '</a>' +
            '       </div>' +
            '<h3 class="item-title">{{title}}</h3>' +
            '<div class="item-text">{{{description}}}</div>' +
            '</div>' +
            '</div>' +
            '{{/shipItems}}';

        var html = Handlebars.compile(templateCard)(data);
        $('.mustache-item').html(html);

        var downloads =
            '{{#shipItems}}' +
            '<ul class="list-unstyled">' +
            '{{#pdfs}}' +
                '<li class="download">' +
                '<a class="btn btn-light mb-1" ' +
                'onclick="ga(\'send\', \'event\', \'PDF\', \'Download\', \'{{title}}\');"' +
                'href="{{url}}">' +
                '<span class="fa fa-arrow-circle-down"></span>'+
                ' {{title}}'+
                '</a>'+
            '{{/pdfs}}' +
            '</ul>' +
            '{{/shipItems}}'
            ;
        var html =  Handlebars.compile(downloads)(data);
        $('.mustache-item-downloads').html(html);

    });
    preLoader();
}



function doMenu(){

    var current  = catSegment; //catSegemnt set from penultimate url segment in craft template as global scope js var

    Handlebars.registerHelper("ifvalue", function(conditional, options) {
        if (conditional == options.hash.equals) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });
    if(locale){
        var lang = "?lang=" + locale;
    }
    var url = domain + '/api/v1/ship/structure/categorieslimit.json' + lang;

    $.getJSON( url, function( data ) {
        console.log(data);
        var sideMenu =
            '<ul class="apiside">' +
            '{{#shipStructureLevelOne}}' +
            '<li><a {{#ifvalue slug equals="'+catSegment+'"}}class="active"{{/ifvalue}} href="' + catUrl + '/{{slug}}">{{title}}</a></li>'+
            '{{/shipStructureLevelOne}}' +
            '</ul>';
        var sidehtml = Handlebars.compile(sideMenu)(data);
        $('.mustache-catnav').html(sidehtml);

    });


}
function doSponsorship(){
    if(locale){
        var lang = "?lang=" + locale;
    }

    var url = domain + '/api/v1/ship/structure/category/'+ catSegment+'.json' + lang;

    $.getJSON( url, function( data ) {

        var sponsorship =
        '{{#each shipStructureAsCategory}}' +
        '{{#if categorySponsors.length}}' +
        '<div class="sponsored col-xs-12 ">'+
        '<h4>Sponsored by</h4>' +
        '<ul class="list-unstyled list-inline">' +
        '{{/if}}' +

        '{{#categorySponsors}}' +
        '<li>' +
        '<a href="{{url}}">' +
        '<img style="max-width:150px;height:auto" src ="{{image}}">' +
        '</a>' +
        '</li>' +
        '{{/categorySponsors}}' +

        '{{#if categorySponsors.length}}</ul>{{/if}}' +
        '{{/each}}';
    //'{{#if shipStructureAsCategory}}</div>{{/if}}' ;

    var result = Handlebars.compile(sponsorship)(data);
    $('.handles').html(result);
    });

}
function doSubHeading(data){
    var templateCatHeading = '{{#shipItems}}{{categoryTitle}}{{/shipItems}}';
    var catheading = Handlebars.compile(templateCatHeading)(data);
    $('.sub-heading').html(catheading);
}

$( document ).ready(function() {

    initialise();
    doMenu();
    doSponsorship();

       //matchehight $('.ship-card').matchHeight(options);

});