module ApplicationHelper
  def toastr_flash
    flash.each_with_object([]) do |(type, message), flash_message|
      type = "success" if type == "notice"
      type = "error" if type == "alert"
      text = content_tag(:script, nil, type: "text/javascript") do
        sanitize("toastr.#{type}('#{message}', '', {closeButton: true, progressBar: true});")
      end
      flash_message << text if message
    end.join("\n")
  end

  def company_active?
    current_page?(action_path) || current_page?(product_path) || current_page?(service_path) || current_page?(new_feed_path)
  end
end
