class Wikitwitter 
    # < ActiveRecord::Base
   include ActiveModel::Model
    

  attr_accessor :tweet

  def client
    @client ||= Twitter::REST::Client.new do |config|
        config.consumer_key        = "SAlIdSPTGYb1DH7DCocckJ5dm"
        config.consumer_secret     = "llEG7QHrLowfFy4O7YEWvYGFtgVD4WrcKoRpxonUCmQ7BfR3y9"
        config.access_token        = "2356601096-18JEtGHVlyPbODgSOwfUOcd28bKgEye0o6EkqIf"
        config.access_token_secret = "RPqhltFZDZX5XDfs2k6kJ3UPCXcnCB4QwoAS1OIo74xLk"
    end
  end
end
