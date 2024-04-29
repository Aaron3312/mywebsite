(((prop("Status") == "Done").length())/ ((prop("Status").length())* 1000).round())/ 1000


(((toNumber(prop("doned?2"))) + (toNumber(prop("Doned ")) ) / (toNumber(substring(prop("Doned "), 2, 4)))))

(((toNumber(prop("doned?2")) + (toNumber(prop("Doned ")) * 100 )) / (toNumber(substring(prop("Doned "), 2, 4)))))

#funciona y hace que el resultado sea 0.5
(((toNumber(prop("doned?2"))) + (toNumber(prop("Doned ")))) / (toNumber(substring(prop("Doned "), 2, 4))))

if(((today()) > prop("DateOfHomework")), (formatDate((split(prop("DateOfHomework"))), "MMMM D, Y")),0)