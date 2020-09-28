//
//  SwiftModule.swift
//  BridgeApp
//
//  Created by Gurmanjot Singh Randhawa on 15/09/20.
//

import Foundation

@objc(SwiftModule)
class SwiftModule: RCTEventEmitter {
  
  @objc
   override func constantsToExport()->[AnyHashable:Any] {
    return [
      "AppName":"Bridge App",
      "Release_year":2020
    ]
  }
    
  @objc func add( _ one:NSInteger,
                Second two:NSInteger,
                Resolver resolve: RCTPromiseResolveBlock,
                Rejector reject:RCTPromiseRejectBlock) -> Void {
 
      let sum : Int = one + two;
      resolve(sum)
      // reject('error code','error msg', NSError)
  }
  
  @objc
  override static func requiresMainQueueSetup()-> Bool{
    return true
  }

  @objc func subtract( _ one:NSInteger,
                  Second two:NSInteger) {
    let value: Int = one - two;
    sendEvent(withName: "subtraction", body: ["value":value])
  }

  override func supportedEvents() -> [String]! {
    return ["subtraction"]
  }
  
}
