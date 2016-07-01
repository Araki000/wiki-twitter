class CreateWikitwitters < ActiveRecord::Migration
  def change
    create_table :wikitwitters do |t|

      t.timestamps null: false
    end
  end
end
