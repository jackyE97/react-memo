const host = "https://wedev-api.sky.pro/api/leaderboard";

//Получаем список лидеров
export async function getLeaders() {
  const response = await fetch(host);
  if (!response.status === 200) {
    throw new Error("Ошибка");
  }
  const data = await response.json();
  return data;
}
//Добавляем лидера в список
export async function postLeaders({ name, time }) {
  const response = await fetch(host, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      time: time,
    }),
  });
  if (response.status === 400) {
    throw new Error("Полученные данные не в формате JSON");
  }
  const data = await response.json();
  return data;
}
