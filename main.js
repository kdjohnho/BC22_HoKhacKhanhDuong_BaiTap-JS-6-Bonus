document.getElementById("btnPrime").onclick = function () {
	var n = document.getElementById("primeNumber").value;
	var result = "";

	// Chỉ in ra từ 2 vì 1 không phải số nguyên tố
	if (!n < 2) {
		// Vòng lặp đầu tiên, i là các số được xét nằm trong khoảng (i, n)
		for (var i = 2; i <= n; i++) {
			// Tạo biến đếm số ước của 1 số
			var count = 0;
			// Vòng lặp 2, j là các ước có thể có của i trong khoảng (j, i-1)
			for (var j = 2; j < i; j++) {
				if (i % j === 0) {
					count++;
				}
			}
			// Nếu biến count=0 ==> số nguyên tố
			if (count === 0) {
				result += i + " ";
			}
		}
	}

	document.getElementById("footerPrime").innerHTML = result;
};
