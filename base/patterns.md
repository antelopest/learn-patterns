# Паттерны проектирования на JavaScript и TypeScript

Паттерны проектирования (design patterns) — это проверенные решения типичных задач в разработке ПО. Они помогают писать
более чистый, масштабируемый и поддерживаемый код. В JavaScript и TypeScript паттерны адаптированы под динамическую
природу JS, с учетом типизации в TS для повышения надежности.

## Вводные темы:

1. [SOLID-принципы](01.%20Intro/02.%20SOLID.md)
2. [DRY-принцип](01.%20Intro/03.%20DRY.md)

1. Основные понятия (паттерн, антипаттерн, SOLID-принципы, GRASP-принципы, DRY, KISS, YAGNI, Law of Demeter (принцип
   минимального знания)).
2. Различия в реализации паттернов на JS (динамическая типизация) и TS (статическая типизация, интерфейсы, generics).

### Полезные ресурсы:

* [Refactoring Guru (TypeScript)](https://refactoring.guru/ru)
* [Patterns (JavaScript)](https://www.patterns.dev/)

## Основные паттерны

В первую очередь реализация паттерна происходит на языке JavaScript, затем адаптация на TypeScript (с учетом типов,
интерфейсов).

### Creational patterns (Создание объектов)

1. Singleton (одиночка)
2. Factory Method (фабричный метод)
3. Abstract Factory (абстрактная фабрика)
4. Builder (строитель)
5. Prototype (прототип)

### Structural Patterns (Структура)

1. Adapter (адаптер)
2. Decorator (декоратор)
3. Facade (фасад)
4. Proxy (прокси)
5. Composite (композит)

### Behavioral Patterns (Поведение)

1. Observer (наблюдатель)
2. Strategy (стратегия)
3. Command (команда)
4. Iterator (итератор)
5. State (состояние)

## Современные и дополнительные паттерны

* Dependency Injection (DI)
* Repository
* Service Layer
* Unit Of Work
* Specification Pattern
* Null Object
* Event Sourcing
* CQRS (Command Query Responsibility Segregation)
* Publish/Subscribe
* Pipeline
* Saga Pattern (в микросервисах)

## Архитектурные партерны

* MVC (Model - View - Controller)
* MVP (Model - View - Presenter)
* MVVM (Model - View - ViewModel)
* Layered Architecture
* Hexagonal Architecture (Ports and Adapters)
* Clean Architecture (Robert C. Martin)
* Event-Driven Architecture
* Microservices
* Monolith/Modular Monolith
* Serverless Patterns

## Паттерны для JavaScript и Frontend

* Module Pattern
* Revealing Module Pattern
* Observer (EventEmitter)
* Pub/Sub
* Factory Function
* Mixin
* Prototype Pattern
* Mediator в UI
* State в React/Angular
* Command для Undo/Redo
* Strategy для смены алгоритмов рендера
* Proxy для реактивности

## Паттерны для асинхронности и потоков данных

* Callback Pattern
* Promise Chain
* Async/Await Wrapper
* Observable/Pub-Sub для событий
* Iterator/Async Iterator
* Reactive Streams (RxJS)
* Backpressure Handing Patterns