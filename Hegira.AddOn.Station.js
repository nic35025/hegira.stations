// ==UserScript==
// @name         Hegira.AddOn.Station
// @namespace    hegira
// @version      1.01
// @description  Add buttons to speed chioce station from list!
// @author       nic35025
// @match        http://hegira.com.pl/*
// @since        2016-10-10
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=
// @grant        GM_log
// @grant        unsafeWindow

// ==/UserScript==

(function() {
    'use strict';
// wyświetlenie przyciskami koloni / stacji
var $ = unsafeWindow.jQuery; // działa wymaga zmiany moich odwołań do function $ !!!

function pgKolonieShow()
{
    var oSel =$("select[name='gdzie_zagladamy']");
    //GM_log("hegira@pgKolonieShow :"+oDst.length +" " + oSel.length );
    if( oSel.length === 0 ) return;
    oSel = oSel[0];

    var txtStacjaName = $.cookie("aktualna_kolonia_n").replace(/[\+]/g,' ');
    for( var i =0; i < oSel.length; i++ ) {
        //GM_log( sprintf("%s. [%s]",i,oSel[i].innerHTML) );
        var txt = oSel[i].innerHTML;
        if( txt == txtStacjaName ) txt = "✔ " +txt;
        $(".surowce tbody tr:first")
            .before( $('<tr>')
                .append( $('<td>').attr("colSpan","4")
                    .append( $("<form>")
                            .attr("method","post").attr("action","engine.php").attr( "name", "wystaw_towar")
                        .append( $("<input>").attr("value", oSel[i].value).attr("name","gdzie_zagladamy").attr("type","hidden") )
                        .append( $("<button>").attr("value","1").attr("name","zaladuj").attr("type","submit").attr("innerHTML",txt).attr("style","width:100%;") )
                    )
                )
            );
    }
}
    // Your code here...
    GM_log("hegira@Start");
    pgKolonieShow();
    GM_log("hegira@Stop");
})();
