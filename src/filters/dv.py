import string
rut = "1093771589"
factores = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71]
rut_ajustado = str(rut).rjust(15, '0')
s = sum(int(rut_ajustado[14-i]) * factores[i] for i in range(14)) % 11
if s > 1:
    dv = 11 - s
    print(str(rut)+"-"+str(dv))
else:
    print(str(s)+"-"+str(dv))
