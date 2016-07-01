class WikitwittersController < ApplicationController
    # require "wikipedia"
    def index
        @page = Wikipedia.find_random()
    end
end
