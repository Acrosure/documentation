# Unique header generation
require 'middleman-core/renderers/redcarpet'
require 'digest'

$head_count = {}
class UniqueHeadCounter < Middleman::Renderers::MiddlemanRedcarpetHTML
  def initialize
    super
  end
  def header(text, header_level)
    friendly_text = text.gsub(/<[^>]*>/,"").parameterize
    id_regexp = /{{id:(?<id>[a-zA-Z0-9\-]*)}}/
    matched = id_regexp.match(text)
    if matched
      id = matched[:id]
      if id && id.strip.length > 0
        stripped_text = text.gsub(id_regexp, "")
        return "<h#{header_level} id='#{id}'>#{stripped_text}</h#{header_level}>"
      end
    end

    if friendly_text.strip.length == 0
      friendly_text = Digest::SHA1.hexdigest(text)[0,6]
    end
    temp_friendly_text = friendly_text
    if !$head_count.has_key?(temp_friendly_text)
      $head_count[temp_friendly_text] ||= 0
    end
    if $head_count[temp_friendly_text] >= 1
      friendly_text += "-#{$head_count[temp_friendly_text]}"
    end
    $head_count[temp_friendly_text] += 1
    return "<h#{header_level} id='#{friendly_text}'>#{text}</h#{header_level}>"
  end
end
