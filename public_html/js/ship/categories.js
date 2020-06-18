function initialise(){

    if(locale){
        var lang = "?lang=" + locale;
    }
    console.log("locale = " + locale);
    var url = domain + '/api/v1/ship/structure/categorieslimit.json' + lang;
    console.log("domain = " + catUrl);
    $.getJSON( url, function( data ) {

        var current  = window.location.pathname.split("/").pop();

        Handlebars.registerHelper("ifvalue", function(conditional, options) {
            if (conditional == options.hash.equals) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        });

        Handlebars.registerHelper("striptags", function( txt ){
            console.log(txt)
            // exit now if text is undefined
            if(typeof txt == "undefined") return;
            // the regular expresion
            var regexp = /<[\/\w]+>/g
            // replacing the text
            return txt.replace(regexp, '');

        });


        var templateCard =
            '{{#shipStructureLevelOne}}' +
            '{{#ifvalue sendtoseafarerhelp equals=true}}' +
            '<div class="col-xs-12 col-sm-6 col-md-6 ">' +
            '<a class="ship-card" href="' + catUrl + '{{slug}}">' +
            '<div class="thumbnail card center" >' +
            '<div class="card-icon ">' +
            '<img class="card-img-top default pt-5 pb-0" src="{{icon}}" alt="Icon {{title}} ">' +
            '<div class="card-body mb-5 ">' +
            '<h3 class="card-title">{{title}}</h3>' +
            '<p class="card-text">{{striptags intro}}</p>' +
            '</div></div></div></div>' +
            '{{/ifvalue}}'+
            '{{/shipStructureLevelOne}}';

        var html = Handlebars.compile(templateCard)(data);
        $('.mustache-cats').html(html);



        console.log(data);
        var sideMenu =
            '<ul class="apiside">' +
            '{{#shipStructureLevelOne}}' +
            '{{#ifvalue sendtoseafarerhelp equals=true}}' +
            '<li><a title="{{type}}" {{#ifvalue slug equals="'+current+'"}}class="active"{{/ifvalue}} href="' + catUrl + '{{slug}}">{{title}}</a></li>'+
            '{{/ifvalue}}'+
            '{{/shipStructureLevelOne}}' +
            '</ul>';
        var sidehtml = Handlebars.compile(sideMenu)(data);
        $('.mustache-catnav').html(sidehtml);


    });

    preLoader();

}
//{% endverbatim %}

$( document ).ready(function() {

    initialise();
});