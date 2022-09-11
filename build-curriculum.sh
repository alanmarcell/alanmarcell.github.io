#!/bin/sh

pandoc README.md  -s -o assets/AlanMarcell_en.pdf
pandoc README.md -o assets/AlanMarcell_en.odt
pandoc README.md -t docx -o assets/AlanMarcell_en.docx

# pandoc index_pt.md  -s -o assets/AlanMarcell_pt.pdf
# pandoc index_pt.md -o assets/AlanMarcell_pt.odt
# pandoc index_pt.md -t docx -o assets/AlanMarcell_pt.docx
