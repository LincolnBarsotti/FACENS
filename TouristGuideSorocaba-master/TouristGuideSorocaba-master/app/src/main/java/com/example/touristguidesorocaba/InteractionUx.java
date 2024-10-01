package com.example.touristguidesorocaba;

import android.content.Intent;
import android.net.Uri;

public class InteractionUx {

    public void InteractionUx() { }

    public Intent getNavigation(String destiny) {
        Uri uriMap = Uri.parse("geo:0,0?q=" + destiny);
        Intent mapIntent = new Intent(Intent.ACTION_VIEW,uriMap);

        return mapIntent;
    }

    public Intent getCall(String tel) {
        Uri uriCall = Uri.parse("tel:" + tel);
        Intent callIntent = new Intent(Intent.ACTION_VIEW, uriCall);

        return callIntent;
    }

    public Intent getSite(String url) {
        Uri uriSite = Uri.parse(url);
        Intent visitSite = new Intent(Intent.ACTION_VIEW, uriSite);

        return visitSite;
    }
}
