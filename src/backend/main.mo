import Time "mo:core/Time";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

actor {
  type Message = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  module Message {
    public func compare(msg1 : Message, msg2 : Message) : Order.Order {
      Text.compare(msg1.email, msg2.email);
    };
  };

  let messages = Map.empty<Text, Message>();

  public shared ({ caller }) func submitForm(name : Text, email : Text, message : Text) : async () {
    if (messages.containsKey(email)) { Runtime.trap("This message already exists") };
    let newMessage : Message = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    messages.add(email, newMessage);
  };

  public query ({ caller }) func getMessage(email : Text) : async Message {
    switch (messages.get(email)) {
      case (null) { Runtime.trap("Message does not exist") };
      case (?message) { message };
    };
  };

  public query ({ caller }) func getAllMessages() : async [Message] {
    messages.values().toArray().sort();
  };
};
