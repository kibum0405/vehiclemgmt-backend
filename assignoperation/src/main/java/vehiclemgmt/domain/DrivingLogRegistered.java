package vehiclemgmt.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.*;
import vehiclemgmt.domain.*;
import vehiclemgmt.infra.AbstractEvent;

//<<< DDD / Domain Event
@Data
@ToString
public class DrivingLogRegistered extends AbstractEvent {

    private String registrationId;
    private String vehicleNumber;
    private Date registrationDate;
    private String purpose;
    private String departure;
    private String departureTime;
    private Integer accumulatedDistanceBefore;
    private String destination;
    private String arrivalTime;
    private Integer accumulatedDistanceAfter;
    private Integer drivingDistance;

    public DrivingLogRegistered(VehiclePerformance aggregate) {
        super(aggregate);
    }

    public DrivingLogRegistered() {
        super();
    }
}
//>>> DDD / Domain Event
