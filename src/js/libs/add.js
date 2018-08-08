define(function() {
    var ints = document.querySelectorAll("#info input")
    var err = document.querySelector(".error");
    var storage = localStorage;
    var cont = document.querySelector(".cont-table")
    var text = document.querySelector(".text");
    var data = {}
    data.list = storage.data ? JSON.parse(storage.data) : [];
    var html = text.innerHTML;
    var setData = Handlebars.compile(html);
    var result = setData(data);
    cont.innerHTML = result;
    var btns = document.querySelectorAll("#content .btns");
    btns.forEach(function(val, k) {
        val.onclick = function() {
            content.removeChild(this.parentNode);
            data.list.splice(k, 1)
            storage.data = JSON.stringify(data.list);
        }
    })
    if (storage.data) {
        err.innerHTML = "";
        err.style.display = "none";
    } else {
        err.innerHTML = "还没有数据呀！小可爱";
        err.style.display = "block";
    }
    btn.onclick = function() {
        var num = ints[0].value.trim();
        var name = ints[1].value.trim();
        var grade = ints[2].value.trim();
        var flag = data.list.some(function(val) {
            return val.num == num
        })
        if (num == "" || name == "" || grade == "") {
            alert("小可爱，内容不能为空哟！")
        } else if (flag) {
            alert("该账号已经被提交过了，妮可妮可妮！")
        } else {
            var obj = {
                num: num,
                name: name,
                grade: grade
            }
            data.list.push(obj)
            storage.data = JSON.stringify(data.list);
            var result = setData(data)
            cont.innerHTML = result;
            err.innerHTML = "";
            err.style.display = "none";
            var btns = document.querySelectorAll("#content .btns");
            btns.forEach(function(val, k) {
                val.onclick = function() {
                    content.removeChild(this.parentNode);
                    data.list.splice(k, 1)
                    storage.data = JSON.stringify(data.list);
                }
            })
        }
    }
})