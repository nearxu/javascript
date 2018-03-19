const students = [
    { name: "Nick", grade: 10 },
    { name: "John", grade: 15 },
    { name: "Julia", grade: 19 },
    { name: "Nathalie", grade: 9 },
  ];
  
  const aboveTenSum = students
    .map(student => student.grade) // 我们将学生数组映射到他们成绩的数组中
    .filter(grade => grade >= 10) // 我们过滤成绩数组以保持10分以上的元素
    .reduce((prev, next) => prev + next, 0); // 我们将合计所有10分以上的成绩
  
  console.log(aboveTenSum) // 44 -- 10 (Nick) + 15 (John) + 19 (Julia), 低于10的 Nathalie 被忽略 