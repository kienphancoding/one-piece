const contentsMember = [
  {
    img: "https://i.pinimg.com/564x/b5/d9/94/b5d9946acc401d828732bc1c519d0a95.jpg",
    name: "Monkey D. Luffy",
    nickname: "Luffy mũ rơm",
    role: "Thuyền trưởng",
    descriptions:
      "Được truyền cảm hứng từ một hải tặc khét tiếng Shank tóc đỏ , Luffy ước mơ trở thành Vua hải tặc . Và trên hành trình đó cậu đã chiêu mộ thêm nhiều thủy thủ đoàn giúp băng hải tặc trở nên hùng mạnh , cậu liên tiếp đánh bại các thế lực máu mặt như Doflamingo , Katakuri , Kaido và cho đến hiện tại , cậu đang được xem là 1 trong tứ hoàng biển cả.",
    color: "red",
  },
  {
    img: "https://i.pinimg.com/564x/0b/28/13/0b28130bd84c9a26feecacd0fd54ede2.jpg",
    name: "Roronoa Zoro",
    nickname: "Thợ săn hải tặc , Thánh lạc đường , Đầu tảo",
    role: "Kiếm sĩ",
    descriptions:
      "Sau cái chết của người bạn thân Kuina, Zoro quyết tâm ngày đêm luyện tập để thực hiện ước mơ là trở thành đệ nhất kiếm sĩ . Trong một lần cậu đi ra ngoài và quên mất đường về làng, cậu đã săn hải tặc để kiếm tiền sinh sống, và có duyên khi gặp Luffy và thay đổi định kiến về hải tặc. Và cậu đã trở thành thuyền đầu tiên của băng.",
    color: "green",
  },
  {
    img: "https://i.pinimg.com/564x/ad/9a/fc/ad9afc6969ec3662eae9470eddb4e66b.jpg",
    name: "Nami",
    nickname: "Miêu tặc",
    role: "Hoa tiêu",
    descriptions:
      "Ban đầu, cô đồng ý gia nhập băng mũ rơm với mục đích lợi dụng để kiếm tiền cứu làng khỏi một tên hải tặc khác nhưng trong thời gian đó cô đã bị cảm hóa và có cách nhìn nhận khác về hải tặc.Nhờ có nhiều kiến thức về hàng hải và địa lí , cô trở thành hoa tiêu - người sẽ định hướng con tàu đi đến bất cứ đâu mà thuyền trưởng mong muốn và ước mơ của cô là vẽ tấm bản đồ thế giới.",
    color: "orange",
  },
  {
    img: "https://i.pinimg.com/564x/a1/e3/1d/a1e31df248664ff2b6bd169d20c555e1.jpg",
    name: "Usopp",
    nickname: "God Usopp , Sogeking",
    role: "Xạ thủ",
    descriptions:
      "Được biết đến là kẻ chuyên bốc phét nhưng lại là người rút lui trong mọi cuộc chiến đấu , Usopp có ước mơ trở thành một chiến binh dũng cảm của biến cả.",
    color: "yellow",
  },
  {
    img: "https://i.pinimg.com/564x/92/6f/a8/926fa89902eb9743918d57fdc33b4b01.jpg",
    name: "Sanji",
    nickname: "Hắc cước , Lông mày xoắn",
    role: "Đầu bếp",
    descriptions:
      "Là người cực kì ga lăng và không bao giờ đánh các quý cô . Anh có quan điểm : đôi tay để nấu ăn chứ không để đánh nhau. Sanji mong muốn được tìm thấy vùng biển All Blues - nơi mà theo truyền thuyết kể lại là nơi mà cá từ các phương đổ về , là thiên đường của mọi đầu bếp.",
    color: "blue",
  },
  {
    img: "https://i.pinimg.com/564x/54/d2/71/54d27111c3efbd9ea1084741cc7c77ad.jpg",
    name: "Tony Tony Chopper",
    nickname: "Tuần lộc mũi xanh , Gấu mèo , Thức ăn dự trữ",
    role: "Bác sĩ",
    descriptions:
      "Là con tuần lộc ăn trái ác quỷ hệ Zoan giúp cho Chopper có thể biến hình cũng như có thể nói như con người , được học rất nhiều kiến thức y khoa từ bác sĩ Kureha , Chopper được mời làm bác sĩ cho băng mũ rơm nhưng vai trò chính là làm thức ăn dự trữ.",
    color: "pink",
  },
  {
    img: "https://i.pinimg.com/564x/4a/b7/e5/4ab7e59a6c8364b7da305c7bea537972.jpg",
    name: "Nico Robin",
    nickname: "Đứa con của quỷ , Miss All Sunday",
    role: "Nhà khảo cổ",
    descriptions:
      "Là người Ohara duy nhất còn sống , cô bị cả thế giới truy đuổi khi còn rất nhỏ vì cô có năng lực đặc biệt là đọc được các kí tự đặc biệt trên phiến đá Ponelyph , cô lợi dụng nhiều tổ chức để mưu sinh và cuối cùng cô cũng tìm được nơi tin tưởng đó là băng mũ rơm.",
    color: "purple",
  },
  {
    img: "https://i.pinimg.com/564x/73/87/ea/7387eafaca2155a1bc01f7db99501c47.jpg",
    name: "Franky",
    nickname: "Người máy , Đại tướng Franky",
    role: "Thợ đóng tàu",
    descriptions:
      "Xuất thân từ xưởng đóng tàu số 1 thế giới , Franky đã đóng con tàu Thousand Sunny và giúp đưa băng mũ rơm tới hòn đảo cuối cùng",
    color: "lightblue",
  },
  {
    img: "https://i.pinimg.com/564x/0e/da/7f/0eda7f7d3555334feada5f57e0bf8e44.jpg",
    name: "Brook",
    nickname: "Soulking , Bộ xương khô",
    role: "Nhạc công",
    descriptions:
      "Sau một tai nạn kinh hoàng đã lấy đi tất cả đồng đội của ông , thì ông được hồi sinh nhờ trái ác quỷ Yomi Yomi và khiến ông trở thành cái xác khô . Ông đã gặp và gia nhập băng mũ rơm rồi sau đó thực hiện lời hứa với con cá heo Laboon.",
    color: "black",
  },
  {
    img: "https://i.pinimg.com/564x/25/0a/3e/250a3e0ef75b2d22f2f87a541ec6da2a.jpg",
    name: "Jinbei",
    nickname: "Hiệp sĩ biển cả",
    role: "Người lái tàu",
    descriptions:
      "Được biết đến lần đầu là một trong các thất vũ hải , Jinbei cũng là thuyền trưởng của băng hải tặc mặt trời , anh quyết định rồi băng để giúp Luffy chạm tới ngôi vị vua hải tặc.",
    color: "#efba0b",
  },
];

export { contentsMember };
