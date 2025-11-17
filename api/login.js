export default function handler(req, res) {
  const { usuario, senha } = req.query;

  const users = {
    MERCATTO_DHEURE: process.env.USER_MERCATTO_DHEURE,
    MERCATTO_YURI: process.env.USER_MERCATTO_YURI,
    MERCATTO_GLEIDSA: process.env.USER_MERCATTO_GLEIDSA,
    MERCATTO_JAQUELINE: process.env.USER_MERCATTO_JAQUELINE,
    MERCATTO_IVANIO: process.env.USER_MERCATTO_IVANIO,
    DELICIA_RUAN: process.env.USER_DELICIA_RUAN,
    DELICIA_VALCIR: process.env.USER_DELICIA_VALCIR
  };

  const normalizedUser = usuario?.toUpperCase().trim();
  const userPass = users[normalizedUser];

  if (!userPass) {
    return res.status(200).json({ success: false, msg: "Usuário não encontrado" });
  }

  if (userPass !== senha) {
    return res.status(200).json({ success: false, msg: "Senha incorreta" });
  }

  let empresa = "MERCATTO DELÍCIA";
  if (normalizedUser.startsWith("DELICIA_")) empresa = "DELÍCIA GOURMET";

  return res.status(200).json({ success: true, empresa });
}
