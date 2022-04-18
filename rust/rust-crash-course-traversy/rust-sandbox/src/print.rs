pub fn run() {
    // Print to console
    println!("Hello from the print.rs file");

    // Basic Formatting
    println!("{}", 1);

    // Positional Arguments
    println!("{0} is from {1} and {0} likes to {2}", "John", "Colorado", "code");
    
    // Name arguments
    println!("{name} is from {place}", name = "John", place = "Colorado");

    // Placeholder traits
    println!("Binary: {:b} Hex: {:x} Octal: {:o}", 10, 10, 10);

    // Placeholder for debug traits
    println!("{:?}", (12, true, "hello"));

    // Basic Math
    println!("10 + 10 = {}", 10 + 10)

}