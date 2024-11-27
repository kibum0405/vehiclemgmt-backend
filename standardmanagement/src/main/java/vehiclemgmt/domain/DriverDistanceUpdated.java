package vehiclemgmt.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.*;
import vehiclemgmt.domain.*;
import vehiclemgmt.infra.AbstractEvent;

//<<< DDD / Domain Event
@Data
@ToString
public class DriverDistanceUpdated extends AbstractEvent {

    private Long id;
    private VehicleStatus status;
    private String registrationNumber;
    private String make;
    private String model;
    private Integer year;
    private Double driverDistance;

    public DriverDistanceUpdated(Vehicle aggregate) {
        super(aggregate);
    }

    public DriverDistanceUpdated() {
        super();
    }
}
//>>> DDD / Domain Event
