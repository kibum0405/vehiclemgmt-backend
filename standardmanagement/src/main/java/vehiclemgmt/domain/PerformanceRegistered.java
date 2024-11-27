package vehiclemgmt.domain;

import java.util.*;
import lombok.*;
import vehiclemgmt.domain.*;
import vehiclemgmt.infra.AbstractEvent;

@Data
@ToString
public class PerformanceRegistered extends AbstractEvent {

    private String registrationId;
    private String vehicleNumber;
    private Object accumulatedDistanceAfter;
    private Double drivingDistance;
    private Object purpose;
    private Object period;
    private Date registrationDate;
}
