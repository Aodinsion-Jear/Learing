# 输入输出

## 读取键盘输入

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("请输入你的名字：");
        String name = sc.nextLine();
        System.out.println("你好，" + name);
        sc.close();
    }
}
```

## 输出

- `System.out.print` 不换行
- `System.out.println` 自动换行
- `System.out.printf` 格式化输出

```java
System.out.printf("姓名：%s，年龄：%d%n", "小明", 18);
```
