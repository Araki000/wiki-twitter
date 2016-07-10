class WikitwittersController < ApplicationController
    require "wikipedia"
    require "twitter"


    def index
        # get page title
        @page = Wikipedia.find_random()
        title = @page.title
        
        # create an instance
        @twitter ||= Wikitwitter.new
        
        if @twitter
            @result = @twitter.client.search(title, exclude: "retweets", count: 15)

        end
    end
    
    def new
        
    end
end