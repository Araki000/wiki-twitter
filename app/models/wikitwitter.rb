class Wikitwitter < ActiveRecord::Base
    #   include ActiveModel::Model

  attr_accessor :tweet

  def client
    @client ||= Twitter::REST::Client.new do |config|
        config.consumer_key        = "LR7eSIGnAAUgw7gXHZ0kANWEU"
        config.consumer_secret     = "y2oiVaIFHILcP1jRQ7spFvBALfJYZjEYyjnkZma4JmUZuBjJG1"
        config.access_token        = "2356601096-18JEtGHVlyPbODgSOwfUOcd28bKgEye0o6EkqIf"
        config.access_token_secret = "RPqhltFZDZX5XDfs2k6kJ3UPCXcnCB4QwoAS1OIo74xLk"
    end
  end
end
