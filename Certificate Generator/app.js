const fs = require("fs")
const moment = require("moment")
const pdfkit = require("pdfkit")

const doc = new pdfkit({ layout: "landscape", size: "A4" })

const name = "Sanjukta Das"

doc.pipe(fs.createWriteStream(`${name}.pdf`))

doc.image("images/template.png", 0, 0, { width: 842 })

doc.font("fonts/DancingScript-VariableFont_wght.ttf")

doc.fontSize(60).text(name, 20, 265, { align: "center" })

doc.fontSize(17).text(moment().format("MMMM Do YYYY"), -275, 430, { align: "center" })

doc.end()