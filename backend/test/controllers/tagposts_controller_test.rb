require "test_helper"

class TagpostsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @tagpost = tagposts(:one)
  end

  test "should get index" do
    get tagposts_url, as: :json
    assert_response :success
  end

  test "should create tagpost" do
    assert_difference('Tagpost.count') do
      post tagposts_url, params: { tagpost: { post_id: @tagpost.post_id, tag_id: @tagpost.tag_id } }, as: :json
    end

    assert_response 201
  end

  test "should show tagpost" do
    get tagpost_url(@tagpost), as: :json
    assert_response :success
  end

  test "should update tagpost" do
    patch tagpost_url(@tagpost), params: { tagpost: { post_id: @tagpost.post_id, tag_id: @tagpost.tag_id } }, as: :json
    assert_response 200
  end

  test "should destroy tagpost" do
    assert_difference('Tagpost.count', -1) do
      delete tagpost_url(@tagpost), as: :json
    end

    assert_response 204
  end
end
