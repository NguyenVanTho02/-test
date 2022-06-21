const submit = async () => {
  try {
    const resData = await axios.post(
      "https://product-hit.herokuapp.com/api/v1/users/register",
      {
        address: null,
        avt: null,
        birthday: null,
        email: "Hatigr.th@gmail.com",
        firstName: "Nguyễn",
        sex: "male",
        lastName: "Thọ",
        password: "Ngtho@02",
        phoneNumber: "0839507568",
        userName: "Ngtho@02",
      }
    );

    if (resData.request.status === 200) {
      alert("Đăng ký thành công");
      navigate("/signIn");
    }
  } catch (err) {
    alert("Đăng ký không thành công");
    alert(JSON.stringify(values, null, 2));
  }
};

submit();
