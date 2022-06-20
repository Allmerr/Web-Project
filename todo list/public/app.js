const root = document.querySelector(".root");

const App = () => {
  const [aktivitas, setAktivitas] = React.useState("");
  const [halhal, setHalhal] = React.useState([]);
  const [edit, setEdit] = React.useState({});
  const [pesan, setPesan] = React.useState("");

  const tambahFun = e => {
    e.preventDefault();

    if (aktivitas == "") {
      setPesan("kosong");
      return;
    }

    setPesan("");

    if (edit.key) {
      const newHal = {
        aktivitas,
        key: edit.key,
        done: false
      };
      const cariIndex = halhal.findIndex(hal => {
        return hal.key == newHal.key;
      });
      const cloneHalhal = [...halhal];
      cloneHalhal[cariIndex] = newHal;
      setHalhal(cloneHalhal);
      setAktivitas("");
      setEdit({});
      return;
    }

    setHalhal([...halhal, {
      aktivitas,
      key: genereteKey(),
      done: false
    }]);
    setPesan("");
    setAktivitas("");
  };

  const genereteKey = () => {
    return Date.now();
  };

  const hapusFun = key => {
    const halhalBaru = halhal.filter(hal => {
      if (hal.key != key) {
        return hal;
      }
    });
    setHalhal(halhalBaru);
    hapusEdit();
  };

  const editFun = hal => {
    setAktivitas(hal.aktivitas);
    setEdit(hal);
  };

  const hapusEdit = () => {
    setEdit({});
    setAktivitas("");
  };

  const checklistFun = hal => {
    const newHal = {
      aktivitas: hal.aktivitas,
      key: hal.key,
      done: hal.done ? false : true
    };
    const cariIndex = halhal.findIndex(hal => {
      return hal.key == newHal.key;
    });
    const cloneHalhal = [...halhal];
    cloneHalhal[cariIndex] = newHal;
    setHalhal(cloneHalhal);
    console.log(cloneHalhal);
    setAktivitas("");
    setEdit({});
    return;
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Todo List"), pesan ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: "red"
    }
  }, "Aktivitas tidak diisi kosong") : "", /*#__PURE__*/React.createElement("form", {
    action: "",
    onSubmit: tambahFun
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "aktivitas mu..",
    onChange: e => setAktivitas(e.target.value),
    value: aktivitas
  }), /*#__PURE__*/React.createElement("button", null, edit.key ? "ubah" : "tambah"), edit.key && /*#__PURE__*/React.createElement("button", {
    onClick: hapusEdit
  }, "hapus perubahan")), halhal.length > 0 ? /*#__PURE__*/React.createElement("ul", null, halhal.map(hal => {
    return /*#__PURE__*/React.createElement("li", {
      key: hal.key
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      onChange: checklistFun.bind(this, hal),
      checked: hal.done
    }), hal.done ? /*#__PURE__*/React.createElement("span", {
      style: {
        textDecoration: "line-through"
      }
    }, hal.aktivitas) : /*#__PURE__*/React.createElement("span", null, hal.aktivitas), /*#__PURE__*/React.createElement("button", {
      onClick: editFun.bind(this, hal)
    }, "edit"), /*#__PURE__*/React.createElement("button", {
      onClick: hapusFun.bind(this, hal.key)
    }, "hapus"));
  })) : /*#__PURE__*/React.createElement("p", null, "tidak ada aktivitas"));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);