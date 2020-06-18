// function initialiseLangShipNav(){
//     Handlebars.registerHelper('times', function(n, block) {
//         var accum = '';
//         for(var i = 0; i < n; ++i) {
//             block.data.index = i;
//             block.data.first = i === 0;
//             block.data.last = i === (n - 1);
//             accum += block.fn(this);
//         }
//         return accum;
//     });
//
//     // limit an array to a maximum of elements (from the start)
//     Handlebars.registerHelper('limit', function (arr, limit) {
//         if (!Array.isArray(arr)) { return []; }
//         return arr.slice(0, limit);
//     });
//     //
//     //if(locale){
//     //    var lang = "?lang=" + locale;
//     //}
//     var url = domain + '/api/v1/ship/category/nav/item/'+ lastSegment+'.json';
//
//     var baseNavLink = 'https://' + window.location.hostname;
//     $.getJSON( url, function( data ) {
//         console.log(data.shipNavItems[0]);
//         data = data.shipNavItems[0];
//         //api data src
//         //$navItems[] = [
//         //        'site' => $siteForEntry['siteId'],
//         //    'url'   => $entryForOtherSite->uri,
//         //    'active' => $active,
//         //    'entryId' => $entryForOtherSite->siteId
//         //];
//         var shipLocaleNav =
//             //'{{#shipNavItems}}' +
//             //'<ul class="list-unstyled">' +
//             '{{#nav}}' +
//                 //'{{#if @index < 1}}' +
//                     '<li class="">' +
//                     '<a href="'+baseNavLink+'/{{url}}">' +
//                     '{{handle}}'+
//                     '</a>' +
//                     '</li>' +
//                 //'{{/if}}'+
//             '{{/nav}}'
//             //'</ul>' +
//             //'{{/shipNavItems}}'
//             ;
//         var html =  Handlebars.compile(shipLocaleNav)(data);
//         //var htmlmob =  Handlebars.compile(shipLocaleNav)(data);
//         $('.shipLangNav').html(html);
//         //$('.mobileshipLangNav').html(htmlmob);
//
//     });
// }
//
//
// $(document).ready(function() {
//     initialiseLangShipNav();
// });