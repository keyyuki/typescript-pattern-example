# Project example of implement design pattern to typescript.
### S.O.I.L.D

#### 1. Single responsibility principle (SRP) – Nguyên lý đơn chức năng

   *A class should have one and only one reason to change, meaning that a class should have only one job.*

#### 2.  Open-Closed principle (OCP) – Nguyên lý đóng mở

   *Objects or entities should be open for extension, but closed for modification.*

   Có thể thoải mái extends 1 class hay object nhưng nên hạn chế sửa đổi nó

#### 3. Liskov substitution principle (LSP) – Nguyên lý thay thế

   *Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.*

   Là nguyên lí dễ vi phạm nhất, ngụ ý khi thay thế 1 class bằng 1 class con của nó phải chú ý class con không được thay đổi tính đúng đắn của cả chương trình

   VD:

   - class con override method của class cha nhưng với chức năng hoàn toàn khác

   - class con override method của class cha nhưng trả về rỗng, không làm gì. 

   - throw exception với method của class cha trong khi method đó không được quy định sẽ throw exception

     

#### 4. Interface segregation principle (ISP) – Nguyên lý phân tách

   *Many client-specific interfaces are better than one general-purpose interface.*

   Chia nhỏ thành nhiều interface còn hơn là dùng 1 interface cho nhiều chức năng

####  5. Dependency Inversion Principle (DIP) – Nguyên lý đảo ngược phụ thuộc

   *- High-level modules should not depend on low-level modules. Both should depend on abstractions.*

   *- Abstractions should not depend upon details. Details should depend upon abstractions.*

   Nghĩa là

   - Module cấp cao không nên phụ thuộc (dependence) vào module cấp thấp, cả 2 nên phục thuộc vào abstraction. Nghĩa là module cấp cao sẽ định nghĩa ra các interface không đổi và module cấp thấp sẽ implement các interface này. VD module cấp cao chỉ định nghĩa dbAccess với các method connect, find, insert. Module con cụ thể mới kế thừa và định hình nó là mysql hay mongodb.
   - Interface và abstract không nên phụ thuộc vào implementation mà ngược lại , các class giao tiếp với nhau thông qua interface, không phải thông qua implementation.


### Creation group

| name                                                                                         | description                                                                                                                                                                                                                                                                        |     |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| [Singleton](https://gpcoder.com/4190-huong-dan-java-design-pattern-singleton/)               | Đảm bảo 1 class chỉ có 1 instance và cung cấp 1 điểm truy xuất toàn cục đến nó.                                                                                                                                                                                                    | 4   |
| [Factory Method](https://gpcoder.com/4352-huong-dan-java-design-pattern-factory-method/)     | Định nghĩa Interface để sinh ra đối tượng nhưng để cho lớp con quyết định lớp nào được dùng để sinh ra đối tượng Factory method cho phép một lớp chuyển quá trình khởi tạo đối tượng cho lớp con.                                                                                  | 5   |
| [Abstract factory](https://gpcoder.com/4365-huong-dan-java-design-pattern-abstract-factory/) | Provide an interface for creating _families_ of related or dependent objects without specifying their concrete classes.                                                                                                                                                            | 3   |
| [Builder](https://gpcoder.com/4434-huong-dan-java-design-pattern-builder/)                   | Tách rời việc xây dựng (construction) một đối tượng phức tạp khỏi biểu diễn của nó sao cho cùng một tiến trình xây dựng có thể tạo được các biểu diễn khác nhau.                                                                                                                   | 2   |
| [Prototype](https://gpcoder.com/4413-huong-dan-java-design-pattern-prototype/)               | Specify the kinds of objects to create using a prototypical instance, and create new objects from the 'skeleton' of an existing object, thus boosting performance and keeping memory footprints to a minimum. Other name is clone                                                  | 4   |
| [Object pool](https://gpcoder.com/4456-huong-dan-java-design-pattern-object-pool/)           | Avoid expensive acquisition and release of resources by recycling objects that are no longer in use. Can be considered a generalisation of [connection pool](https://en.wikipedia.org/wiki/Connection_pool) and [thread pool](https://en.wikipedia.org/wiki/Thread_pool) patterns. | 2   |
| [Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection)                   | A class accepts the objects it requires from an injector instead of creating the objects directly.                                                                                                                                                                                 | 3   |
| [Lazy initialization](https://en.wikipedia.org/wiki/Lazy_initialization)                     | Tactic of delaying the creation of an object, the calculation of a value, or some other expensive process until the first time it is needed.                                                                                                                                       | 3   |

### Structure group

| name                                                                           | description                                                                                                                                                                                                                                                                                                                                 |     |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| [Adapter](https://gpcoder.com/4483-huong-dan-java-design-pattern-adapter/)     | Convert the interface of a class into another interface clients expect. An adapter lets classes work together that could not otherwise because of incompatible interfaces. The enterprise integration pattern equivalent is the translator.                                                                                                 | 4   |
| [Bridge](https://gpcoder.com/4520-huong-dan-java-design-pattern-bridge/)       | Tách rời ngữ nghĩa của một vấn đề khỏi việc cài đặt, mục đích để cả hai bộ phận (ngữ nghĩa và cài đặt) có thể thay đổi độc lập nhau.                                                                                                                                                                                                        | 3   |
| [Composite](https://gpcoder.com/4554-huong-dan-java-design-pattern-composite/) | Tổ chức các đối tượng theo cấu trúc phân cấp dạng cây. Tất cả các đối tượng trong cấu trúc được thao tác theo một cách thuần nhất như nhau. Tạo quan hệ thứ bậc bao gộp giữa các đối tượng. Client có thể xem đối tượng bao gộp và bị bao gộp như nhau -> khả năng tổng quát hoá trong code của client -> dễ phát triển, nâng cấp, bảo trì. | 4   |
| [Decorator](https://gpcoder.com/4574-huong-dan-java-design-pattern-decorator/) | Gán thêm trách nhiệm cho đối tượng (mở rộng chức năng) vào lúc chạy (dynamically).                                                                                                                                                                                                                                                          | 3   |
| [Facade](https://gpcoder.com/4604-huong-dan-java-design-pattern-facade/)       | Cung cấp một interface thuần nhất cho một tập hợp các interface trong một “hệ thống con” (subsystem). Nó định nghĩa 1 interface cao hơn các interface có sẵn để làm cho hệ thống con dễ sử dụng hơn.                                                                                                                                        | 5   |
| [Flyweight](https://gpcoder.com/4626-huong-dan-java-design-pattern-flyweight/) | Sử dụng việc chia sẻ để thao tác hiệu quả trên một số lượng lớn đối tượng “cở nhỏ” (chẳng hạn paragraph, dòng, cột, ký tự…).                                                                                                                                                                                                                | 1   |
| [Proxy](https://gpcoder.com/4644-huong-dan-java-design-pattern-proxy/)         | Cung cấp đối tượng đại diện cho một đối tượng khác để hỗ trợ hoặc kiểm soát quá trình truy xuất đối tượng đó. Đối tượng thay thế gọi là proxy.                                                                                                                                                                                              | 4   |
| [Front controller](https://en.wikipedia.org/wiki/Front_controller)             | The pattern relates to the design of Web applications. It provides a centralized entry point for handling requests.                                                                                                                                                                                                                         | 3   |
| [Module](https://en.wikipedia.org/wiki/Module_pattern)                         | Group several related elements, such as classes, singletons, methods, globally used, into a single conceptual entity.                                                                                                                                                                                                                       | 4   |
|                                                                                |                                                                                                                                                                                                                                                                                                                                             |     |

### Behavioral group

| name                                                                                                       | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |     |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| [Chain of responsibility](https://gpcoder.com/4665-huong-dan-java-design-pattern-chain-of-responsibility/) | Khắc phục việc ghép cặp giữa bộ gởi và bộ nhận thông điệp. Các đối tượng nhận thông điệp được kết nối thành một chuỗi và thông điệp được chuyển dọc theo chuỗi nầy đến khi gặp được đối tượng xử lý nó. Tránh việc gắn kết cứng giữa phần tử gởi request với phần tử nhận và xử lý request bằng cách cho phép hơn 1 đối tượng có có cơ hội xử lý request. Liên kết các đối tượng nhận request thành 1 dây chuyền rồi gửi request xuyên qua từng đối tượng xử lý đến khi gặp đối tượng xử lý cụ thể. | 2   |
| [Command](https://gpcoder.com/4686-huong-dan-java-design-pattern-command/)                                 | Mỗi yêu cầu (thực hiện một thao tác nào đó) được bao bọc thành một đối tượng. Các yêu cầu sẽ được lưu trữ và gởi đi như các đối tượng.Đóng gói request vào trong một Object, nhờ đó có thể nthông số hoá chương trình nhận request và thực hiện các thao tác trên request: sắp xếp, log, undo…                                                                                                                                                                                                      | 4   |
| [Interpreter](https://gpcoder.com/4702-huong-dan-java-design-pattern-interpreter/)                         | Hỗ trợ việc định nghĩa biểu diễn văn phạm và bộ thông dịch cho một ngôn ngữ.                                                                                                                                                                                                                                                                                                                                                                                                                        | 1   |
| [Iterator](https://gpcoder.com/4724-huong-dan-java-design-pattern-iterator/)                               | Truy xuất các phần tử của đối tượng dạng tập hợp tuần tự (list, array, …) mà không phụ thuộc vào biểu diễn bên trong của các phần tử.                                                                                                                                                                                                                                                                                                                                                               | 5   |
| [Mediator](https://gpcoder.com/4740-huong-dan-java-design-pattern-mediator/)                               | Định nghĩa một đối tượng để bao bọc việc giao tiếp giữa một số đối tượng với nhau.                                                                                                                                                                                                                                                                                                                                                                                                                  | 2   |
| [Memento](https://gpcoder.com/4763-huong-dan-java-design-pattern-memento/)                                 | Hiệu chỉnh và trả lại như cũ trạng thái bên trong của đối tượng mà vẫn không vi phạm việc bao bọc dữ liệu.                                                                                                                                                                                                                                                                                                                                                                                          | 1   |
| [Observer](https://gpcoder.com/4747-huong-dan-java-design-pattern-observer/)                               | Định nghĩa sự phụ thuộc một-nhiều giữa các đối tượng sao cho khi một đối tượng thay đổi trạng thái thì tất cả các đối tượng phụ thuộc nó cũng thay đổi theo.                                                                                                                                                                                                                                                                                                                                        | 5   |
| [State](https://gpcoder.com/4785-huong-dan-java-design-pattern-state/)                                     | Cho phép một đối tượng thay đổi hành vi khi trạng thái bên trong của nó thay đổi, ta có cảm giác như class của đối tượng bị thay đổi.                                                                                                                                                                                                                                                                                                                                                               | 3   |
| [Strategy](https://gpcoder.com/4796-huong-dan-java-design-pattern-strategy/)                               | Bao bọc một họ các thuật toán bằng các lớp đối tượng để thuật toán có thể thay đổi độc lập đối với chương trình sử dụng thuật toán.Cung cấp một họ giải thuật cho phép client chọn lựa linh động một giải thuật cụ thể khi sử dụng.                                                                                                                                                                                                                                                                 | 4   |
| [Template method](https://gpcoder.com/4810-huong-dan-java-design-pattern-template-method/)                 | Định nghĩa phần khung của một thuật toán, tức là một thuật toán tổng quát gọi đến một số phương thức chưa được cài đặt trong lớp cơ sở; việc cài đặt các phương thức được ủy nhiệm cho các lớp kế thừa.                                                                                                                                                                                                                                                                                             | 3   |
| [Visitor](https://gpcoder.com/4813-huong-dan-java-design-pattern-visitor/)                                 | Cho phép định nghĩa thêm phép toán mới tác động lên các phần tử của một cấu trúc đối tượng mà không cần thay đổi các lớp định nghĩa cấu trúc đó.                                                                                                                                                                                                                                                                                                                                                    | 1   |

### Concurrency Group

|                                            Name                                            | Description                                                                                                                                                                                                                                                                                                                                                                  | In _[POSA2](https://en.wikipedia.org/wiki/Pattern-Oriented_Software_Architecture)_ |                                         Other                                          |
| :----------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
|                [Active Object](https://en.wikipedia.org/wiki/Active_object)                | Decouples method execution from method invocation that reside in their own thread of control. The goal is to introduce concurrency, by using [asynchronous method invocation](https://en.wikipedia.org/wiki/Asynchronous_method_invocation) and a [scheduler](<https://en.wikipedia.org/wiki/Scheduling_(computing)>) for handling requests.                                 |                                        Yes                                         |                                          N/A                                           |
|                  [Balking](https://en.wikipedia.org/wiki/Balking_pattern)                  | Only execute an action on an object when the object is in a particular state.                                                                                                                                                                                                                                                                                                |                                         No                                         |                                          N/A                                           |
|       [Binding properties](https://en.wikipedia.org/wiki/Binding_properties_pattern)       | Combining multiple observers to force properties in different objects to be synchronized or coordinated in some way.                                                                                                                                                                                                                                                         |                                         No                                         |                                          N/A                                           |
|               [Compute kernel](https://en.wikipedia.org/wiki/Compute_kernel)               | The same calculation many times in parallel, differing by integer parameters used with non-branching pointer math into shared arrays, such as [GPU](https://en.wikipedia.org/wiki/GPU)-optimized [Matrix multiplication](https://en.wikipedia.org/wiki/Matrix_multiplication) or [Convolutional neural network](https://en.wikipedia.org/wiki/Convolutional_neural_network). |                                         No                                         |                                          N/A                                           |
|   [Double-checked locking](https://en.wikipedia.org/wiki/Double_checked_locking_pattern)   | Reduce the overhead of acquiring a lock by first testing the locking criterion (the 'lock hint') in an unsafe manner; only if that succeeds does the actual locking logic proceed.Can be unsafe when implemented in some language/hardware combinations. It can therefore sometimes be considered an [anti-pattern](https://en.wikipedia.org/wiki/Anti-pattern).             |                                        Yes                                         |                                          N/A                                           |
| [Event-based asynchronous](https://en.wikipedia.org/wiki/Event-Based_Asynchronous_Pattern) | Addresses problems with the asynchronous pattern that occur in multithreaded programs.                                                                                                                                                                                                                                                                                       |                                         No                                         |                                          N/A                                           |
|           [Guarded suspension](https://en.wikipedia.org/wiki/Guarded_suspension)           | Manages operations that require both a lock to be acquired and a precondition to be satisfied before the operation can be executed.                                                                                                                                                                                                                                          |                                         No                                         |                                          N/A                                           |
|                     [Join](https://en.wikipedia.org/wiki/Join-pattern)                     | Join-pattern provides a way to write concurrent, parallel and distributed programs by message passing. Compared to the use of threads and locks, this is a high-level programming model.                                                                                                                                                                                     |                                         No                                         |                                          N/A                                           |
|              [Lock](<https://en.wikipedia.org/wiki/Lock_(computer_science)>)               | One thread puts a "lock" on a resource, preventing other threads from accessing or modifying it.                                                                                                                                                                                                                                                                             |                                         No                                         | PoEAA[[14\]](https://en.wikipedia.org/wiki/Software_design_pattern#cite_note-PoEAA-14) |
|     [Messaging design pattern (MDP)](https://en.wikipedia.org/wiki/Messaging_pattern)      | Allows the interchange of information (i.e. messages) between components and applications.                                                                                                                                                                                                                                                                                   |                                         No                                         |                                          N/A                                           |
|        [Monitor object](<https://en.wikipedia.org/wiki/Monitor_(synchronization)>)         | An object whose methods are subject to [mutual exclusion](https://en.wikipedia.org/wiki/Mutual_exclusion), thus preventing multiple objects from erroneously trying to use it at the same time.                                                                                                                                                                              |                                        Yes                                         |                                          N/A                                           |
|                  [Reactor](https://en.wikipedia.org/wiki/Reactor_pattern)                  | A reactor object provides an asynchronous interface to resources that must be handled synchronously.                                                                                                                                                                                                                                                                         |                                        Yes                                         |                                          N/A                                           |
|          [Read-write lock](https://en.wikipedia.org/wiki/Read/write_lock_pattern)          | Allows concurrent read access to an object, but requires exclusive access for write operations.                                                                                                                                                                                                                                                                              |                                         No                                         |                                          N/A                                           |
|                [Scheduler](https://en.wikipedia.org/wiki/Scheduler_pattern)                | Explicitly control when threads may execute single-threaded code.                                                                                                                                                                                                                                                                                                            |                                         No                                         |                                          N/A                                           |
|              [Thread pool](https://en.wikipedia.org/wiki/Thread_pool_pattern)              | A number of threads are created to perform a number of tasks, which are usually organized in a queue. Typically, there are many more tasks than threads. Can be considered a special case of the [object pool](https://en.wikipedia.org/wiki/Object_pool) pattern.                                                                                                           |                                         No                                         |                                          N/A                                           |
|      [Thread-specific storage](https://en.wikipedia.org/wiki/Thread-Specific_Storage)      | Static or "global" memory local to a thread.                                                                                                                                                                                                                                                                                                                                 |                                        Yes                                         |                                          N/A                                           |

### Link (the more \*, the more popular use)

[Giới thiệu Design Patterns](https://gpcoder.com/4164-gioi-thieu-design-patterns/)

[Hướng dẫn Java Design Pattern – Singleton \*\*\*\*\*](https://gpcoder.com/4190-huong-dan-java-design-pattern-singleton/)

[Hướng dẫn Java Design Pattern – Factory Method \*\*\*\*\*](https://gpcoder.com/4352-huong-dan-java-design-pattern-factory-method/)

[Hướng dẫn Java Design Pattern – Abstract Factory \*\*\*\*\*](https://gpcoder.com/4365-huong-dan-java-design-pattern-abstract-factory/)

[Hướng dẫn Java Design Pattern – Prototype \*\*\*](https://gpcoder.com/4413-huong-dan-java-design-pattern-prototype/)

[Hướng dẫn Java Design Pattern – Builder \*\*](https://gpcoder.com/4434-huong-dan-java-design-pattern-builder/)

[Hướng dẫn Java Design Pattern – Object Pool \*\*](https://gpcoder.com/4456-huong-dan-java-design-pattern-object-pool/)

[Hướng dẫn Java Design Pattern – Adapter \*\*\*\*](https://gpcoder.com/4483-huong-dan-java-design-pattern-adapter/)

[Hướng dẫn Java Design Pattern – Bridge \*\*\*](https://gpcoder.com/4520-huong-dan-java-design-pattern-bridge/)

[Hướng dẫn Java Design Pattern – Composite \*\*\*\*](https://gpcoder.com/4554-huong-dan-java-design-pattern-composite/)

[Hướng dẫn Java Design Pattern – Decorator \*\*\*](https://gpcoder.com/4574-huong-dan-java-design-pattern-decorator/)

[Hướng dẫn Java Design Pattern – Facade \*\*\*\*\*](https://gpcoder.com/4604-huong-dan-java-design-pattern-facade/)

[Hướng dẫn Java Design Pattern – Flyweight \*](https://gpcoder.com/4626-huong-dan-java-design-pattern-flyweight/)

[Hướng dẫn Java Design Pattern – Proxy \*\*\*\*](https://gpcoder.com/4644-huong-dan-java-design-pattern-proxy/)

[Hướng dẫn Java Design Pattern – Chain of Responsibility \*\*](https://gpcoder.com/4665-huong-dan-java-design-pattern-chain-of-responsibility/)

[Hướng dẫn Java Design Pattern – Command \*\*\*\*](https://gpcoder.com/4686-huong-dan-java-design-pattern-command/)

[Hướng dẫn Java Design Pattern – Interpreter \*](https://gpcoder.com/4702-huong-dan-java-design-pattern-interpreter/)

[Hướng dẫn Java Design Pattern – Iterator **\***](https://gpcoder.com/4724-huong-dan-java-design-pattern-iterator/)

[Hướng dẫn Java Design Pattern – Mediator \*\*](https://gpcoder.com/4740-huong-dan-java-design-pattern-mediator/)

[Hướng dẫn Java Design Pattern – Memento \*](https://gpcoder.com/4763-huong-dan-java-design-pattern-memento/)

[Hướng dẫn Java Design Pattern – Observer \*\*\*\*\*](https://gpcoder.com/4747-huong-dan-java-design-pattern-observer/)

[Hướng dẫn Java Design Pattern – State \*\*\*](https://gpcoder.com/4785-huong-dan-java-design-pattern-state/)

[Hướng dẫn Java Design Pattern – Strategy \*\*\*\*](https://gpcoder.com/4796-huong-dan-java-design-pattern-strategy/)

[Hướng dẫn Java Design Pattern – Template Method \*\*\*](https://gpcoder.com/4810-huong-dan-java-design-pattern-template-method/)

[Hướng dẫn Java Design Pattern – Visitor \*](https://gpcoder.com/4813-huong-dan-java-design-pattern-visitor/)

[Hướng dẫn Java Design Pattern – Null Object](https://gpcoder.com/4920-huong-dan-java-design-pattern-null-object/)

[Hướng dẫn Java Design Pattern – DAO](https://gpcoder.com/4935-huong-dan-java-design-pattern-dao/)

[Hướng dẫn Java Design Pattern – Service Locator \*\*\*\*](https://gpcoder.com/4946-huong-dan-java-design-pattern-service-locator/)

[Hướng dẫn Java Design Pattern – Dependency Injection \*\*\*](https://gpcoder.com/4975-huong-dan-java-design-pattern-dependency-injection/)

[Giới thiệu Google Guice – Dependency injection (DI) framework](https://gpcoder.com/5015-gioi-thieu-google-guice-dependency-injection-di-framework/)

[Giới thiệu Google Guice – Binding](https://gpcoder.com/5029-gioi-thieu-google-guice-binding/)

[Giới thiệu Google Guice – Injection, Scope](https://gpcoder.com/5041-gioi-thieu-google-guice-injection-scope/)

[Giới thiệu Aspect Oriented Programming (AOP)](https://gpcoder.com/5112-gioi-thieu-aspect-oriented-programming-aop/)

[Giới thiệu Google Guice – Aspect Oriented Programming (AOP)](https://gpcoder.com/5137-gioi-thieu-google-guice-aspect-oriented-programming-aop/)

[Hướng dẫn Java Design Pattern – MVC](https://gpcoder.com/5160-huong-dan-java-design-pattern-mvc/)

[Hướng dẫn Java Design Pattern – Transfer Object](https://gpcoder.com/5156-huong-dan-java-design-pattern-transfer-object/)

[Hướng dẫn Java Design Pattern – Intercepting Filter](https://gpcoder.com/5158-huong-dan-java-design-pattern-intercepting-filter/)

[Giới thiệu thư viện Apache Commons Chain](https://gpcoder.com/5538-gioi-thieu-thu-vien-apache-commons-chain/)

[Giới thiệu Java Service Provider Interface (SPI) – Tạo các ứng dụng Java dễ mở rộng](https://gpcoder.com/5554-gioi-thieu-java-service-provider-interface-spi-tao-cac-ung-dung-java-de-mo-rong/)

[Refactoring Design Pattern với tính năng mới trong Java 8](https://gpcoder.com/6200-refactoring-design-pattern-voi-tinh-nang-moi-trong-java-8/)
